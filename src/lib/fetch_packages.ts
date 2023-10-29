import {PackageJson} from '@grogarden/gro/package_json.js';
import type {Url} from '@grogarden/gro/paths.js';
import {strip_end} from '@grogarden/util/string.js';
import type {Logger} from '@grogarden/util/log.js';
import {wait} from '@grogarden/util/async.js';
import {parse_package_meta, type PackageMeta} from '@fuz.dev/fuz_library/package_meta.js';

import {fetch_github_pull_requests, type Github_Pull_Request} from '$lib/github.js';
import {
	to_fetch_cache_key,
	type Fetch_Cache_Data,
	type Fetch_Cache_Item,
} from '$lib/fetch_cache.js';

// TODO rethink with `Package` and `Fetched_Package2`
export interface Maybe_Fetched_Package {
	url: Url;
	package_json: PackageJson | null; // TODO forward error
	pulls: Github_Pull_Request[] | null;
}

// TODO rethink with `Maybe_Fetched_Package`
export interface Fetched_Package extends PackageMeta {
	pulls: Github_Pull_Request[] | null;
}

export interface Unfetchable_Package {
	url: Url;
	package_json: null;
	pulls: null;
}

// TODO rethink these names
export type Fetched_Package_Meta = Fetched_Package | Unfetchable_Package;

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
			const pkg = parse_package_meta(homepage_url, package_json);
			if (!pkg) throw Error('failed to parse package_json: ' + homepage_url);
			const {data: pulls} = await fetch_github_pull_requests(homepage_url, pkg, cache, log, token);
			if (!pulls) throw Error('failed to fetch issues: ' + homepage_url);
			await wait(delay);
			packages.push({url: homepage_url, package_json, pulls});
		} catch (err) {
			packages.push({url: homepage_url, package_json: null, pulls: null});
			log?.error(err);
		}
	}
	return packages;
};

// TODO refactor with `fetch_github_pull_requests`
const fetch_package_json = async (
	homepage_url: string,
	cache?: Fetch_Cache_Data,
	log?: Logger,
): Promise<Fetch_Cache_Item<PackageJson | null>> => {
	const url = strip_end(homepage_url, '/') + '/.well-known/package.json'; // TODO helper
	log?.info('fetching', homepage_url);
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
	try {
		const res = await fetch(url, {headers});
		if (res.status === 304) {
			log?.info('cached', key);
			return cached!;
		}
		log?.info('not cached', key);
		const json = await res.json();
		const package_json = PackageJson.parse(json); // TODO maybe not?
		const result: Fetch_Cache_Item = {
			url,
			params: null,
			key,
			etag: res.headers.get('etag'),
			data: package_json,
		};
		cache?.set(result.key, result);
		return result;
	} catch (err) {
		const result: Fetch_Cache_Item<PackageJson | null> = {
			url,
			params: null,
			key,
			etag: null,
			data: null,
		}; // TODO better error
		return result;
	}
};
