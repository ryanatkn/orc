import {PackageJson} from '@grogarden/gro/package_json.js';
import type {Url} from '@grogarden/gro/paths.js';
import {strip_end} from '@grogarden/util/string.js';
import type {Logger} from '@grogarden/util/log.js';
import {wait} from '@grogarden/util/async.js';
import {parse_package_meta, type PackageMeta} from '@fuz.dev/fuz_library/package_meta.js';

import {fetch_github_pull_requests, type GithubPullRequest} from '$lib/github.js';
import {to_fetch_cache_key, type FetchCache, type FetchCacheItem} from '$lib/fetch_cache.js';

// TODO rethink with `Package` and `FetchedPackage2`
export interface MaybeFetchedPackage {
	url: Url;
	etag: string | null;
	package_json: PackageJson | null; // TODO forward error
	pulls: GithubPullRequest[] | null;
}

// TODO rethink with `MaybeFetchedPackage`
export interface FetchedPackage extends PackageMeta {
	etag: string | null;
	pulls: GithubPullRequest[] | null;
}

export interface UnfetchablePackage {
	url: Url;
	etag: string | null;
	package_json: null;
	pulls: null;
}

// TODO rethink these names
export type FetchedPackageMeta = FetchedPackage | UnfetchablePackage;

/* eslint-disable no-await-in-loop */

export const fetch_packages = async (
	urls: Url[],
	token?: string,
	cache?: FetchCache,
	log?: Logger,
	delay = 50,
): Promise<MaybeFetchedPackage[]> => {
	log?.info(`urls`, urls);
	const packages: MaybeFetchedPackage[] = [];
	for (const url of urls) {
		try {
			// TODO generic per-request caching by url+params instead of hardcoding

			const {data: package_json, etag} = await fetch_package_json(url, cache, log);
			if (!package_json) throw Error('failed to load package_json: ' + url);
			await wait(delay);
			const pkg = parse_package_meta(url, package_json);
			if (!pkg) throw Error('failed to parse package_json: ' + url);
			const {data: pulls} = await fetch_github_pull_requests(url, pkg, cache, log, token);
			if (!pulls) throw Error('failed to fetch issues: ' + url);
			await wait(delay);
			packages.push({url, etag, package_json, pulls});
		} catch (err) {
			packages.push({url, etag: null, package_json: null, pulls: null});
			log?.error(err);
		}
	}
	return packages;
};

const fetch_package_json = async (
	url: string,
	cache?: FetchCache,
	log?: Logger,
): Promise<{data: PackageJson | null; etag: string | null}> => {
	const package_json_url = strip_end(url, '/') + '/.well-known/package.json'; // TODO helper
	const key = to_fetch_cache_key(package_json_url, null);
	log?.info('fetching', url);
	const cached = cache?.get(key);
	const headers: Record<string, string> = {
		'content-type': 'application/json',
		accept: 'application/json',
	};
	const etag = cached?.etag;
	if (etag) {
		headers['if-none-match'] = etag;
	}
	console.log(`cached`, !!cached);
	try {
		console.log(`fetching with headers`, headers);
		const res = await fetch(package_json_url, {headers});
		log?.info(`res.headers`, res.headers);
		console.log(`res.status`, res.status);
		if (res.status === 304) {
			console.log('CACHE HIT');
			return cached!;
		}
		const json = await res.json();
		const package_json = PackageJson.parse(json); // TODO maybe not?
		const result: FetchCacheItem = {
			url: package_json_url,
			key,
			params: null,
			etag: res.headers.get('etag'),
			data: package_json,
		};
		cache?.set(result.key, result);
		return result;
	} catch (err) {
		return {data: null, etag: null}; // TODO better error
	}
};
