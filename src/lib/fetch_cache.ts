import {z} from 'zod';
import {Url} from '@grogarden/gro/paths.js';
import type {Flavored} from '@grogarden/util/types.js';

export interface Fetch_Cache {
	name: string;
	data: Fetch_Cache_Data; // TODO probably expose an API for this instead of passing the map directly
	/**
	 * @returns a boolean indicating if anything changed, returns `false` if it was a no-op
	 */
	save: () => Promise<boolean>;
}

export const Fetch_Cache_Key = z.string();
export type Fetch_Cache_Key = Flavored<z.infer<typeof Fetch_Cache_Key>, 'Fetch_Cache_Key'>;

export type Fetch_Cache_Data = Map<Fetch_Cache_Key, Fetch_Cache_Item>;

export const Fetch_Cache_Item = z.object({
	url: Url,
	params: z.any(), // TODO object | null?
	key: Fetch_Cache_Key,
	etag: z.string().nullable(),
	data: z.any(), // TODO type?
});
// TODO use `z.infer<typeof Fetch_Cache_Item>`, how with generic?
export interface Fetch_Cache_Item<TData = any, TParams = any> {
	url: Url;
	params: TParams;
	key: Fetch_Cache_Key;
	etag: string | null;
	last_modified: string | null;
	data: TData;
}

export const CACHE_KEY_SEPARATOR = '::';

// TODO canonical form to serialize params, start by sorting object keys
export const to_fetch_cache_key = (url: Url, params: any, method = 'get'): Fetch_Cache_Key =>
	method + CACHE_KEY_SEPARATOR + url + CACHE_KEY_SEPARATOR + JSON.stringify(params);

export const serialize_cache = (cache: Fetch_Cache_Data): string =>
	JSON.stringify(Array.from(cache.values()));

// TODO generic serialization, these are just maps
export const deserialize_cache = (serialized: string): Fetch_Cache_Data => {
	// TODO maybe take a `data_schema` param and `Fetch_Cache_Item.extend({data: data_schema}).parse(...)`
	const parsed: Fetch_Cache_Item[] = JSON.parse(serialized).map((v: any) =>
		Fetch_Cache_Item.parse(v),
	);
	return new Map(parsed.map((v) => [v.key, v]));
};
