import {z} from 'zod';
import {Url} from '@grogarden/gro/paths.js';
import type {Flavored} from '@grogarden/util/types.js';

export interface FetchCache {
	name: string;
	data: FetchCacheData; // TODO probably expose an API for this instead of passing the map directly
	save: () => Promise<void>;
}

export const FetchCacheKey = z.string();
export type FetchCacheKey = Flavored<z.infer<typeof FetchCacheKey>, 'FetchCacheKey'>;

export type FetchCacheData = Map<FetchCacheKey, FetchCacheItem>;

export const FetchCacheItem = z.object({
	url: Url,
	params: z.any(), // TODO object | null?
	key: FetchCacheKey,
	etag: z.string().nullable(),
	data: z.any(), // TODO type?
});
// TODO use `z.infer<typeof FetchCacheItem>`, how with generic?
export interface FetchCacheItem<TData = any, TParams = any> {
	url: Url;
	params: TParams;
	key: FetchCacheKey;
	etag: string | null;
	data: TData;
}

export const CACHE_KEY_SEPARATOR = '::';

// TODO canonical form to serialize params, start by sorting object keys
export const to_fetch_cache_key = (url: Url, params: any, method = 'get'): FetchCacheKey =>
	method + CACHE_KEY_SEPARATOR + url + CACHE_KEY_SEPARATOR + JSON.stringify(params);

export const serialize_cache = (cache: FetchCacheData): string =>
	JSON.stringify(Array.from(cache.values()));

// TODO generic serialization, these are just maps
export const deserialize_cache = (serialized: string): FetchCacheData => {
	// TODO maybe take a `data_schema` param and `FetchCacheItem.extend({data: data_schema}).parse(...)`
	const parsed: FetchCacheItem[] = JSON.parse(serialized).map((v: any) => FetchCacheItem.parse(v));
	return new Map(parsed.map((v) => [v.key, v]));
};
