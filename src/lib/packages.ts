import {getContext, setContext} from 'svelte';
import {parse_package_meta} from '@fuz.dev/fuz_library/package_meta.js';

import type {
	Fetched_Package,
	Maybe_Fetched_Package,
	Unfetched_Package,
} from '$lib/fetch_packages.js';

// TODO BLOCK what relationship does this have to `Deployments`?
// TODO BLOCK name? move to `fetch_packages`?
export interface Packages {
	pkgs: Fetched_Package[];
	pkg: Fetched_Package;
	unfetched_pkgs: Unfetched_Package[];
}

const KEY = Symbol('Packages');

export const set_packages = (packages: Packages): Packages => setContext(KEY, packages);

export const get_packages = (): Packages => getContext(KEY);

export const parse_packages = (packages: Maybe_Fetched_Package[]): Packages => {
	const pkgs: Fetched_Package[] = packages
		.map(({url, package_json, src_json, pull_requests}) =>
			package_json && src_json
				? {...parse_package_meta(url, package_json, src_json), pull_requests}
				: null!,
		)
		.filter(Boolean);

	const pkg = pkgs[0];

	const unfetched_pkgs: Unfetched_Package[] = packages
		.map(({url, package_json, src_json}) =>
			package_json && src_json
				? null!
				: {url, package_json: null, src_json: null, pull_requests: null},
		)
		.filter(Boolean);

	return {pkgs, pkg, unfetched_pkgs};
};
