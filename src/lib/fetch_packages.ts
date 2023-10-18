import {PackageJson} from '@grogarden/gro/package_json.js';
import type {Url} from '@grogarden/gro/paths.js';
import {strip_end} from '@grogarden/util/string.js';
import type {Logger} from '@grogarden/util/log.js';
import {wait} from '@grogarden/util/async.js';

export interface FetchedPackage {
	url: Url;
	package_json: PackageJson | null; // TODO forward error
}

/* eslint-disable no-await-in-loop */

export const fetch_packages = async (
	urls: Url[],
	log?: Logger,
	delay = 50,
): Promise<FetchedPackage[]> => {
	console.log(`urls`, urls);
	const packages: FetchedPackage[] = [];
	for (const url of urls) {
		const package_json_url = strip_end(url, '/') + '/.well-known/package.json'; // TODO helper
		log?.info('fetching', package_json_url);
		try {
			const res = await fetch(package_json_url, {
				headers: {'content-type': 'application/json', accept: 'application/json'},
			});
			const json = await res.json();
			const package_json = PackageJson.parse(json); // TODO maybe not?
			packages.push({url, package_json});
		} catch (err) {
			packages.push({url, package_json: null}); // TODO better error
		}
		// TODO delay?
		await wait(delay);
	}
	return packages;
};
