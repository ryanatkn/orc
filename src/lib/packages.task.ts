import type {Task} from '@grogarden/gro';
import {load_package_json} from '@grogarden/gro/package_json.js';
import {z} from 'zod';
import {writeFile} from 'node:fs/promises';
import {format_file} from '@grogarden/gro/format_file.js';
import {exists} from '@grogarden/gro/exists.js';
import {join} from 'node:path';
import {paths} from '@grogarden/gro/paths.js';
import {GITHUB_TOKEN_SECRET} from '$env/static/private';

import {fetch_packages, type Maybe_Fetched_Package} from '$lib/fetch_packages.js';
import {load_orc_config} from '$lib/config.js';
import {create_fs_fetch_cache} from '$lib/fs_fetch_cache.js';

// TODO add flag to ignore or invalidate cache -- no-cache? clean?

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

		const orc_config = await load_orc_config(dir);
		const {packages} = orc_config;

		const cache = await create_fs_fetch_cache('packages');

		const fetched_packages = await fetch_packages(packages, GITHUB_TOKEN_SECRET, cache.data, log);

		const local_package_json = await load_package_json(dir);

		const final_packages: Maybe_Fetched_Package[] = local_package_json?.homepage
			? [
					{
						url: local_package_json.homepage,
						package_json: local_package_json,
						pulls: null, // TODO - maybe `fetch_packages` should look locally just for the package_json?
					} as Maybe_Fetched_Package,
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
	import type {Fetched_Package} from '@ryanatkn/orc/fetch_packages.js';
	const data: Fetched_Package[];
	export default data;
}
`,
			);
		}

		await cache.save();
	},
};
