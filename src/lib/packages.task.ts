import type {Task} from '@grogarden/gro';
import {z} from 'zod';
import {writeFile} from 'node:fs/promises';
import {format_file} from '@grogarden/gro/format_file.js';
import {exists} from '@grogarden/gro/fs.js';
import {join} from 'node:path';
import {paths} from '@grogarden/gro/paths.js';
import {load_from_env} from '@grogarden/gro/env.js';

import {fetch_packages} from '$lib/fetch_packages.js';
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

		const orc_config = await load_orc_config(log, dir);
		const {packages} = orc_config;

		const cache = await create_fs_fetch_cache('packages');

		// This searches the parent directory for the env var, so we don't use SvelteKit's $env imports
		const token = await load_from_env('GITHUB_TOKEN_SECRET');
		if (!token) {
			log.warn('the env var GITHUB_TOKEN_SECRET was not found, so API calls with be unauthorized');
		}
		const fetched_packages = await fetch_packages(packages, token, cache.data, dir, log);

		await writeFile(
			outfile,
			await format_file(JSON.stringify(fetched_packages), {filepath: outfile}),
		);

		const types_outfile = outfile + '.d.ts';
		if (!(await exists(types_outfile))) {
			await writeFile(
				types_outfile,
				`declare module '$lib/packages.json' {
	import type {Maybe_Fetched_Package} from '@ryanatkn/orc/fetch_packages.js';
	const data: Maybe_Fetched_Package[];
	export default data;
}
`,
			);
		}

		const changed = await cache.save();
		if (changed) {
			log.info('packages cache updated');
		} else {
			log.info('packages cache did not change');
		}
	},
};
