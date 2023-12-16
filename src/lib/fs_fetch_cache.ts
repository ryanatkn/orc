import {mkdir, readFile, rm, writeFile} from 'node:fs/promises';
import {exists} from '@grogarden/gro/fs.js';
import {dirname, join} from 'node:path';
import {paths} from '@grogarden/gro/paths.js';
import {format_file} from '@grogarden/gro/format_file.js';
import {dequal} from 'dequal';
import {
	deserialize_cache,
	serialize_cache,
	type Fetch_Cache_Data,
	type Fetch_Cache,
} from '@grogarden/util/fetch.js';

// TODO rename?

export const create_fs_fetch_cache = async (
	name: string,
	dir = join(paths.build, 'fetch'),
): Promise<Fetch_Cache> => {
	const data_path = join(dir, name + '.json');
	let data: Fetch_Cache_Data;
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
	const initial = structuredClone(data);
	return {
		name,
		data,
		save: async () => {
			if (dequal(initial, data)) {
				return false; // no changes to save
			}
			await mkdir(dirname(data_path), {recursive: true});
			await writeFile(data_path, await format_file(serialize_cache(data), {filepath: data_path}));
			return true;
		},
	};
};
