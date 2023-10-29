import type {Url} from '@grogarden/gro/paths.js';
import type {Flavored} from '@grogarden/util/types.js';

export type FetchCacheKey = Flavored<string, 'FetchCacheKey'>;

export type FetchCache = Map<FetchCacheKey, FetchCacheItem>;

export interface FetchCacheItem<TData = any, TParams = any> {
	url: Url;
	params: TParams;
	key: FetchCacheKey;
	etag: string | null;
	data: TData;
}

export const to_fetch_cache_key = (url: Url, params: any): FetchCacheKey =>
	url + '#' + JSON.stringify(params);

export const serialize_cache = (cache: FetchCache): string =>
	JSON.stringify(Array.from(cache.entries()));

// TODO generic serialization, these are just maps
export const deserialize_cache = (serialized: string): FetchCache =>
	new Map(JSON.parse(serialized));
