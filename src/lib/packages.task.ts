import type {Task} from '@grogarden/gro';
import {load_package_json} from '@grogarden/gro/package_json.js';
import {z} from 'zod';
import {readFile, writeFile} from 'node:fs/promises';
import {format_file} from '@grogarden/gro/format_file.js';
import {exists} from '@grogarden/gro/exists.js';
import {join} from 'node:path';
import {paths} from '@grogarden/gro/paths.js';
import {GITHUB_TOKEN_SECRET} from '$env/static/private';

import {fetch_packages, type MaybeFetchedPackage} from '$lib/fetch_packages.js';
import {load_orc_config} from '$lib/config.js';
import {deserialize_cache, serialize_cache, type FetchCache} from '$lib/fetch_cache.js';

// TODO etags - cache?
// TODO refactor for reusability

// TODO maybe support `--check` for CI
export const Args = z
	.object({
		dir: z
			.string({
				description: 'path to the directory containing the source package.json and orc.config.ts',
			})
			.optional(),
	})
	.strict();
export type Args = z.infer<typeof Args>;

/**
 * This is a task not a `.gen.` file because it makes network calls.
 */
export const task: Task<Args> = {
	Args,
	summary: 'download metadata for the given packages',
	run: async ({args, log}) => {
		const {dir} = args;

		const outfile = join(paths.lib, 'packages.json');
		const cache_path = join(paths.lib, 'fetch_cache.json');

		const orc_config = await load_orc_config(dir);
		const {packages} = orc_config;

		// TODO maybe parse and bust on failure?
		const cache: FetchCache = (await exists(cache_path))
			? deserialize_cache(await readFile(cache_path, 'utf8'))
			: new Map();

		const fetched_packages = await fetch_packages(packages, GITHUB_TOKEN_SECRET, cache, log);

		const local_package_json = await load_package_json(dir);

		const final_packages: MaybeFetchedPackage[] = local_package_json?.homepage
			? [
					{
						url: local_package_json.homepage,
						package_json: local_package_json,
					} as MaybeFetchedPackage,
			  ].concat(fetched_packages)
			: fetched_packages;

		await writeFile(
			outfile,
			await format_file(JSON.stringify(final_packages), {filepath: outfile}),
		);

		const types_outfile = outfile + '.d.ts';
		if (!(await exists(types_outfile))) {
			await writeFile(
				types_outfile,
				`declare module '$lib/packages.json' {
	import type {FetchedPackage} from '@ryanatkn/orc/fetch_packages.js';
	const data: FetchedPackage[];
	export default data;
}
`,
			);
		}

		await writeFile(cache_path, await format_file(serialize_cache(cache), {filepath: cache_path}));

		const types_cache_path = cache_path + '.d.ts';
		if (!(await exists(types_cache_path))) {
			await writeFile(
				types_cache_path,
				`declare module '$lib/fetch_cache.json' {
	import type {FetchCache} from '@ryanatkn/orc/fetch_cache.js';
	const data: FetchCache;
	export default data;
}
`,
			);
		}
	},
};
