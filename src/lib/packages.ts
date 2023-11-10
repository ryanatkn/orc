import {getContext, setContext} from 'svelte';

import type {Fetched_Package, Unfetched_Package} from '$lib/fetch_packages.js';

// TODO BLOCK what if this was `Deployments`?
// TODO BLOCK name? move to `fetch_packages`?
export interface Packages {
	pkgs: Fetched_Package[];
	pkg: Fetched_Package;
	unfetched_pkgs: Unfetched_Package[];
}

const KEY = Symbol('Packages');

export const set_packages = (packages: Packages): Packages => setContext(KEY, packages);

export const get_packages = (): Packages => getContext(KEY);
