import {Package_Json} from '@grogarden/gro/package_json.js';
import type {Url} from '@grogarden/gro/paths.js';
import {ensure_end} from '@grogarden/util/string.js';
import type {Logger} from '@grogarden/util/log.js';
import {wait} from '@grogarden/util/async.js';
import {parse_package_meta, type Package_Meta} from '@fuz.dev/fuz_library/package_meta.js';
import type {Src_Json} from '@grogarden/gro/src_json.js';

import {fetch_github_pull_requests, type Github_Pull_Request} from '$lib/github.js';
import {
	to_fetch_cache_key,
	type Fetch_Cache_Data,
	type Fetch_Cache_Item,
} from '$lib/fetch_cache.js';

// TODO rethink these
export interface Maybe_Fetched_Package {
	url: Url;
	package_json: Package_Json | null; // TODO forward error
	src_json: Src_Json | null; // TODO forward error
	pull_requests: Github_Pull_Request[] | null;
}

// TODO rethink these
export interface Fetched_Package extends Package_Meta {
	pull_requests: Github_Pull_Request[] | null;
}

// TODO rethink these
export interface Unfetched_Package extends Maybe_Fetched_Package {
	url: Url;
	package_json: null;
	src_json: null;
	pull_requests: null;
}

// TODO rethink these
export type Fetched_Package_Meta = Fetched_Package | Unfetched_Package;

/* eslint-disable no-await-in-loop */

export const fetch_packages = async (
	homepage_urls: Url[],
	token?: string,
	cache?: Fetch_Cache_Data,
	log?: Logger,
	delay = 50,
): Promise<Maybe_Fetched_Package[]> => {
	log?.info(`homepage_urls`, homepage_urls);
	const packages: Maybe_Fetched_Package[] = [];
	for (const homepage_url of homepage_urls) {
		try {
			const {data: package_json} = await fetch_package_json(homepage_url, cache, log);
			if (!package_json) throw Error('failed to load package_json: ' + homepage_url);
			await wait(delay);
			const {data: src_json} = await fetch_src_json(homepage_url, cache, log);
			if (!src_json) throw Error('failed to load src_json: ' + homepage_url);
			await wait(delay);
			const pkg = parse_package_meta(homepage_url, package_json, src_json);
			if (!pkg) throw Error('failed to parse package_json: ' + homepage_url);
			const {data: pull_requests} = await fetch_github_pull_requests(
				homepage_url,
				pkg,
				cache,
				log,
				token,
			);
			if (!pull_requests) throw Error('failed to fetch issues: ' + homepage_url);
			await wait(delay);
			packages.push({url: homepage_url, package_json, src_json, pull_requests});
		} catch (err) {
			packages.push({url: homepage_url, package_json: null, src_json: null, pull_requests: null});
			log?.error(err);
		}
	}
	return packages;
};

// TODO make this work with other urls and text, and extract

export const fetch_package_json = async (
	homepage_url: string,
	cache?: Fetch_Cache_Data,
	log?: Logger,
): Promise<Fetch_Cache_Item<Package_Json | null>> => {
	const url = ensure_end(homepage_url, '/') + '.well-known/package.json'; // TODO helper
	return fetch_json(url, cache, log);
};

export const fetch_src_json = async (
	homepage_url: string,
	cache?: Fetch_Cache_Data,
	log?: Logger,
): Promise<Fetch_Cache_Item<Package_Json | null>> => {
	const url = ensure_end(homepage_url, '/') + '.well-known/src.json'; // TODO helper
	return fetch_json(url, cache, log);
};

// TODO refactor with `fetch_github_pull_requests`
export const fetch_json = async (
	url: string,
	cache?: Fetch_Cache_Data,
	log?: Logger,
): Promise<Fetch_Cache_Item<Package_Json | null>> => {
	log?.info('fetching', url);
	const headers: Record<string, string> = {
		'content-type': 'application/json',
		accept: 'application/json',
	};
	const key = to_fetch_cache_key(url, null);
	const cached = cache?.get(key);
	const etag = cached?.etag;
	if (etag) {
		headers['if-none-match'] = etag;
	}
	const last_modified = cached?.last_modified;
	if (last_modified) {
		headers['if-modified-since'] = last_modified;
	}
	try {
		const res = await fetch(url, {headers}); // TODO handle `retry-after` @see https://docs.github.com/en/rest/guides/best-practices-for-using-the-rest-api
		if (res.status === 304) {
			log?.info('cached', key);
			return cached!;
		}
		log?.info('not cached', key);
		log?.info('res.headers', res.headers);
		const json = await res.json();
		const package_json = Package_Json.parse(json); // TODO maybe not?
		const result: Fetch_Cache_Item = {
			url,
			params: null,
			key,
			etag: res.headers.get('etag'),
			last_modified: res.headers.get('last-modified'),
			data: package_json,
		};
		cache?.set(result.key, result);
		return result;
	} catch (err) {
		const result: Fetch_Cache_Item<Package_Json | null> = {
			url,
			params: null,
			key,
			etag: null,
			last_modified: null,
			data: null,
		}; // TODO better error
		return result;
	}
};
