import {mkdir, readFile, rm, writeFile} from 'node:fs/promises';
import {exists} from '@grogarden/gro/exists.js';
import {dirname, join} from 'node:path';

import {deserialize_cache, serialize_cache, type FetchCache} from '$lib/fetch_cache.js';
import {paths} from '@grogarden/gro/paths.js';
import {format_file} from '@grogarden/gro/format_file.js';

// TODO rename
export interface FetchCacheFs {
	name: string;
	data: FetchCache;
	save: () => Promise<void>;
}

export const create_fetch_cache_fs = async (
	name: string,
	dir = join(paths.build, 'fetch'),
): Promise<FetchCacheFs> => {
	const data_path = join(dir, name + '.json');
	let data: FetchCache;
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
