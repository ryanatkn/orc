import {load_package_json, Package_Json} from '@grogarden/gro/package_json.js';
import type {Url} from '@grogarden/gro/paths.js';
import {ensure_end} from '@grogarden/util/string.js';
import type {Logger} from '@grogarden/util/log.js';
import {wait} from '@grogarden/util/async.js';
import {parse_package_meta, type Package_Meta} from '@fuz.dev/fuz_library/package_meta.js';
import {create_src_json, type Src_Json} from '@grogarden/gro/src_json.js';
import {join} from 'node:path';

import {
	fetch_github_check_runs,
	fetch_github_pull_requests,
	Github_Check_Runs,
	type Github_Pull_Request,
} from '$lib/github.js';
import {
	to_fetch_cache_key,
	type Fetch_Cache_Data,
	type Fetch_Cache_Item,
} from '$lib/fetch_cache.js';

export type Deployment = Fetched_Deployment | Unfetched_Deployment;

export interface Fetched_Deployment extends Package_Meta {
	check_runs: Github_Check_Runs | null;
	pull_requests: Github_Pull_Request[] | null;
}

export interface Unfetched_Deployment {
	url: Url;
	package_json: null;
	src_json: null;
	check_runs: null;
	pull_requests: null;
}

/* eslint-disable no-await-in-loop */

// TODO probably refactor to an object API
export const fetch_deployments = async (
	homepage_urls: Url[],
	token?: string,
	cache?: Fetch_Cache_Data,
	dir?: string,
	log?: Logger,
	delay = 50,
	github_api_version?: string,
	github_refs?: Record<string, string>, // if not 'main', mapping from the provided raw `homepage_url` to branch name
): Promise<Deployment[]> => {
	log?.info(`homepage_urls`, homepage_urls);

	// If one of the `homepage_urls` is the local package.json's `homepage` (local in `dir`),
	// use the local information as much as possible to ensure we're up to date.
	// If this isn't done, the local package's info will be pulled from the web,
	// making it perpetually behind by one deployment.
	const local_package_json = await load_package_json(dir);
	const local_homepage_url = local_package_json.homepage
		? ensure_end(local_package_json.homepage, '/')
		: undefined;

	const deployments: Deployment[] = [];
	for (const raw_homepage_url of homepage_urls) {
		const homepage_url = ensure_end(raw_homepage_url, '/');
		try {
			let package_json: Package_Json;
			let src_json: Src_Json;

			// Handle the local package data, if available
			if (homepage_url === local_homepage_url) {
				log?.info('resolving data locally for', homepage_url);
				package_json = local_package_json;
				src_json = await create_src_json(
					local_package_json,
					log,
					dir ? join(dir, 'src/lib') : undefined,
				);
			} else {
				log?.info('fetching data for', homepage_url);

				// `${base}/.well-known/package.json`
				const fetched_package_json = await fetch_package_json(homepage_url, cache, log);
				if (!fetched_package_json.data) throw Error('failed to load package_json: ' + homepage_url);
				package_json = fetched_package_json.data;
				await wait(delay);

				// `${base}/.well-known/src.json`
				const fetched_src_json = await fetch_src_json(homepage_url, cache, log);
				if (!fetched_src_json.data) throw Error('failed to load src_json: ' + homepage_url);
				src_json = fetched_src_json.data;
				await wait(delay);
			}

			const pkg = parse_package_meta(homepage_url, package_json, src_json);

			// CI status
			const {data: check_runs} = await fetch_github_check_runs(
				homepage_url,
				pkg,
				cache,
				log,
				token,
				github_api_version,
				github_refs?.[raw_homepage_url],
			);
			if (!check_runs) throw Error('failed to fetch CI status: ' + homepage_url);
			await wait(delay);

			// pull requests
			const {data: pull_requests} = await fetch_github_pull_requests(
				homepage_url,
				pkg,
				cache,
				log,
				token,
				github_api_version,
			);
			if (!pull_requests) throw Error('failed to fetch issues: ' + homepage_url);
			await wait(delay);

			deployments.push({...pkg, check_runs, pull_requests});
		} catch (err) {
			deployments.push({
				url: homepage_url,
				package_json: null,
				src_json: null,
				check_runs: null,
				pull_requests: null,
			});
			log?.error(err);
		}
	}
	return deployments;
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
		log?.info('res.headers', Object.fromEntries(res.headers.entries()));
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
