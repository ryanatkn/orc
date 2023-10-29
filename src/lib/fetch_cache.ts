import type {Url} from '@grogarden/gro/paths.js';
import type {Flavored} from '@grogarden/util/types.js';

export interface FetchCache {
	name: string;
	data: FetchCacheData;
	save: () => Promise<void>;
}

export type FetchCacheKey = Flavored<string, 'FetchCacheKey'>;

export type FetchCacheData = Map<FetchCacheKey, FetchCacheItem>;

export interface FetchCacheItem<TData = any, TParams = any> {
	url: Url;
	params: TParams;
	key: FetchCacheKey;
	etag: string | null;
	data: TData;
}

// TODO canonical form to serialize params, start by sorting object keys
export const to_fetch_cache_key = (url: Url, params: any): FetchCacheKey =>
	url + '::' + JSON.stringify(params);

export const serialize_cache = (cache: FetchCacheData): string =>
	JSON.stringify(Array.from(cache.values()));

// TODO generic serialization, these are just maps
export const deserialize_cache = (serialized: string): FetchCacheData =>
	new Map(JSON.parse(serialized).map((v: FetchCacheItem) => [v.key, v]));
