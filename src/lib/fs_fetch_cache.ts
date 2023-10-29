import {mkdir, readFile, rm, writeFile} from 'node:fs/promises';
import {exists} from '@grogarden/gro/exists.js';
import {dirname, join} from 'node:path';
import {paths} from '@grogarden/gro/paths.js';
import {format_file} from '@grogarden/gro/format_file.js';

import {
	deserialize_cache,
	serialize_cache,
	type FetchCacheData,
	type FetchCache,
} from '$lib/fetch_cache.js';

// TODO rename?

export const create_fs_fetch_cache = async (
	name: string,
	dir = join(paths.build, 'fetch'),
): Promise<FetchCache> => {
	const data_path = join(dir, name + '.json');
	let data: FetchCacheData;
	if (await exists(data_path)) {
		try {
			data = deserialize_cache(await readFile(data_path, 'utf8')); // TODO pass schema to parse so failures invalidate the cache
		} catch (err) {
			data = new Map();
			await rm(data_path);
		}
	} else {
		data = new Map();
	}
	return {
		name,
		data,
		save: async () => {
			await mkdir(dirname(data_path), {recursive: true});
			await writeFile(data_path, await format_file(serialize_cache(data), {filepath: data_path}));
		},
	};
};
