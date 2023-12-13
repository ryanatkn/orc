import {getContext, setContext} from 'svelte';
import {parse_package_meta} from '@fuz.dev/fuz_library/package_meta.js';

import type {
	Fetched_Deployment,
	Maybe_Fetched_Deployment,
	Unfetched_Deployment,
} from '$lib/fetch_deployments.js';

export interface Deployments {
	pkg: Fetched_Deployment;
	pkgs: Fetched_Deployment[];
	unfetched_deployments: Unfetched_Deployment[];
}

const KEY = Symbol('Deployments');

export const set_deployments = (deployments: Deployments): Deployments =>
	setContext(KEY, deployments);

export const get_deployments = (): Deployments => getContext(KEY);

export const parse_deployments = (deployments: Maybe_Fetched_Deployment[]): Deployments => {
	const pkgs: Fetched_Deployment[] = [];
	const unfetched_deployments: Unfetched_Deployment[] = [];

	for (const {url, package_json, src_json, check_runs, pull_requests} of deployments) {
		if (package_json && src_json) {
			pkgs.push({...parse_package_meta(url, package_json, src_json), check_runs, pull_requests});
		} else {
			unfetched_deployments.push({
				url,
				package_json: null,
				src_json: null,
				check_runs: null,
				pull_requests: null,
			});
		}
	}

	const pkg = pkgs[0];

	return {pkg, pkgs, unfetched_deployments};
};
