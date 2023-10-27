import {PackageJson} from '@grogarden/gro/package_json.js';
import type {Url} from '@grogarden/gro/paths.js';
import {strip_end} from '@grogarden/util/string.js';
import type {Logger} from '@grogarden/util/log.js';
import {wait} from '@grogarden/util/async.js';
import {parse_package_meta, type PackageMeta} from '@fuz.dev/fuz_library/package_meta.js';
import {request} from '@octokit/request';

// TODO rethink with `Package` and `FetchedPackage2`
export interface MaybeFetchedPackage {
	url: Url;
	package_json: PackageJson | null; // TODO forward error
	pulls: GithubIssue[] | null;
}

type GithubIssue = any; // TODO

export interface FetchedPackage extends PackageMeta {
	pulls: GithubIssue[] | null;
}

export interface UnfetchablePackage {
	url: Url;
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
	console.log(`urls`, urls);
	const packages: MaybeFetchedPackage[] = [];
	for (const url of urls) {
		try {
			const package_json = await load_package_json(url, log);
			if (!package_json) throw Error('failed to load package_json: ' + url);
			await wait(delay);
			const pkg = parse_package_meta(url, package_json);
			if (!pkg) throw Error('failed to parse package_json: ' + url);
			const pulls = await fetch_github_issues(url, pkg, log, token);
			if (!pulls) throw Error('failed to fetch issues: ' + url);
			await wait(delay);
			packages.push({url, package_json, pulls});
		} catch (err) {
			packages.push({url, package_json: null, pulls: null});
			log?.error(err);
		}
	}
	return packages;
};

const fetch_github_issues = async (url: string, pkg: PackageMeta, log?: Logger, token?: string) => {
	log?.info(`[fetch_github_issues] url`, url);
	if (!pkg.owner_name) return null;
	const res = await request('GET /repos/{owner}/{repo}/pulls', {
		headers: {authorization: 'token ' + token},
		owner: pkg.owner_name,
		repo: pkg.repo_name,
		sort: 'updated',
	});
	log?.info(`res`, res);
	return res.data;
};

const load_package_json = async (url: string, log?: Logger): Promise<PackageJson | null> => {
	const package_json_url = strip_end(url, '/') + '/.well-known/package.json'; // TODO helper
	log?.info('fetching', package_json_url);
	try {
		const res = await fetch(package_json_url, {
			headers: {'content-type': 'application/json', accept: 'application/json'},
		});
		const json = await res.json();
		const package_json = PackageJson.parse(json); // TODO maybe not?
		return package_json;
	} catch (err) {
		return null; // TODO better error
	}
};
