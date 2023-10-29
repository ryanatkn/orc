import {PackageJson} from '@grogarden/gro/package_json.js';
import type {Url} from '@grogarden/gro/paths.js';
import {strip_end} from '@grogarden/util/string.js';
import type {Logger} from '@grogarden/util/log.js';
import {wait} from '@grogarden/util/async.js';
import {parse_package_meta, type PackageMeta} from '@fuz.dev/fuz_library/package_meta.js';

import {fetch_github_issues, type GithubIssue} from '$lib/github.js';

// TODO rethink with `Package` and `FetchedPackage2`
export interface MaybeFetchedPackage {
	url: Url;
	etag: string | null;
	package_json: PackageJson | null; // TODO forward error
	pulls: GithubIssue[] | null;
}

export interface FetchedPackage extends PackageMeta {
	etag: string | null;
	pulls: GithubIssue[] | null;
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
	log?: Logger,
	delay = 50,
): Promise<MaybeFetchedPackage[]> => {
	log?.info(`urls`, urls);
	const packages: MaybeFetchedPackage[] = [];
	for (const url of urls) {
		try {
			const {package_json, etag} = await load_package_json(url, log);
			if (!package_json) throw Error('failed to load package_json: ' + url);
			await wait(delay);
			const pkg = parse_package_meta(url, package_json);
			if (!pkg) throw Error('failed to parse package_json: ' + url);
			const pulls = await fetch_github_issues(url, pkg, log, token);
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

const load_package_json = async (
	url: string,
	log?: Logger,
): Promise<{package_json: PackageJson | null; etag: string | null}> => {
	const package_json_url = strip_end(url, '/') + '/.well-known/package.json'; // TODO helper
	log?.info('fetching', package_json_url);
	try {
		const res = await fetch(package_json_url, {
			headers: {'content-type': 'application/json', accept: 'application/json'},
		});
		const json = await res.json();
		const package_json = PackageJson.parse(json); // TODO maybe not?
		return {package_json, etag: res.headers.get('etag')};
	} catch (err) {
		return {package_json: null, etag: null}; // TODO better error
	}
};
