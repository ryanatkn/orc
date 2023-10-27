import {PackageJson} from '@grogarden/gro/package_json.js';
import type {Url} from '@grogarden/gro/paths.js';
import {strip_end} from '@grogarden/util/string.js';
import type {Logger} from '@grogarden/util/log.js';
import {wait} from '@grogarden/util/async.js';
import type {PackageMeta} from '@fuz.dev/fuz_library/package_meta.js';

// TODO rethink with `Package`
export interface FetchedPackage {
	url: Url;
	package_json: PackageJson | null; // TODO forward error
	issues: GithubIssue[]; // TODO BLOCK type
}

type GithubIssue = any; // TODO BLOCK

// TODO rethink with `PackageMeta`
export type FetchedPackageMeta = PackageMeta | {url: Url; package_json: null};

/* eslint-disable no-await-in-loop */

export const fetch_packages = async (
	urls: Url[],
	log?: Logger,
	delay = 50,
): Promise<FetchedPackage[]> => {
	console.log(`urls`, urls);
	const packages: FetchedPackage[] = [];
	for (const url of urls) {
		const package_json = await load_package_json(url, log);
		// TODO delay?
		await wait(delay);
		const issues = await fetch_github_issues(url);
		if (!issues) throw Error('failed to fetch issues: ' + url);
		await wait(delay);
		packages.push({url, package_json, issues});
	}
	return packages;
};

const fetch_github_issues = async (url: string, log?: Logger): Promise<GithubIssue[] | null> => {
	return null;
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
