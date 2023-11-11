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
	pkg: Fetched_Package;
	pkgs: Fetched_Package[];
	unfetched_pkgs: Unfetched_Package[];
}

const KEY = Symbol('Packages');

export const set_packages = (packages: Packages): Packages => setContext(KEY, packages);

export const get_packages = (): Packages => getContext(KEY);

export const parse_packages = (packages: Maybe_Fetched_Package[]): Packages => {
	const pkgs: Fetched_Package[] = [];
	const unfetched_pkgs: Unfetched_Package[] = [];

	for (const {url, package_json, src_json, pull_requests} of packages) {
		if (package_json && src_json) {
			pkgs.push({...parse_package_meta(url, package_json, src_json), pull_requests});
		} else {
			unfetched_pkgs.push({url, package_json: null, src_json: null, pull_requests: null});
		}
	}

	const pkg = pkgs[0];

	return {pkg, pkgs, unfetched_pkgs};
};
