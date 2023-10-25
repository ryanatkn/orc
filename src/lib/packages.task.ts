import type {Task} from '@grogarden/gro';
import {load_package_json, type PackageJson} from '@grogarden/gro/package_json.js';
import {z} from 'zod';
import {writeFile} from 'node:fs/promises';
import {format_file} from '@grogarden/gro/format_file.js';
import {exists} from '@grogarden/gro/exists.js';

import {fetch_packages, type FetchedPackage} from '$lib/fetch_packages.js';
import {load_orc_config} from '$lib/config.js';

// TODO refactor for reusability

// TODO maybe support `--check` for CI
export const Args = z
	.object({
		outfile: z
			.string({description: 'path to the generated packages.json file'})
			.default('./src/lib/packages.json'),
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
		const {outfile} = args;

		const orc_config = await load_orc_config();
		const package_urls = orc_config.repos;

		const fetched_packages = await fetch_packages(package_urls, log);

		let local_package_json: PackageJson | undefined;
		try {
			local_package_json = await load_package_json();
		} catch (err) {}

		const packages: FetchedPackage[] = local_package_json?.homepage
			? [
					{url: local_package_json.homepage, package_json: local_package_json} as FetchedPackage,
			  ].concat(fetched_packages)
			: fetched_packages;

		await writeFile(outfile, await format_file(JSON.stringify(packages), {filepath: outfile}));

		const types_outfile = outfile + '.d.ts';
		if (!(await exists(types_outfile))) {
			await writeFile(
				types_outfile,
				`declare module '$lib/packages.json' {
	import type {FetchedPackage} from '$lib/fetch_packages.js';
	const data: FetchedPackage[];
	export default data;
}
`,
			);
		}
	},
};
