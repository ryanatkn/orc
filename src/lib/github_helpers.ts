import type {Package_Meta} from '@fuz.dev/fuz_library/package_meta.js';
import {ensure_end} from '@grogarden/util/string.js';

import type {Github_Pull_Request} from '$lib/github.js';
import type {Fetched_Deployment, Maybe_Fetched_Deployment} from '$lib/fetch_deployments.js';

export interface Filter_Pull_Request {
	(pull_request: Github_Pull_Request, pkg: Maybe_Fetched_Deployment): boolean;
}

export interface Pull_Request_Meta {
	pkg: Package_Meta;
	pull_request: Github_Pull_Request;
}

export const to_pull_requests = (
	deployments: Fetched_Deployment[],
	filter_pull_request?: Filter_Pull_Request,
): Pull_Request_Meta[] =>
	deployments
		.flatMap((pkg) => {
			if (!pkg.pull_requests) return null!;
			// TODO hacky, figure out the data structure
			return pkg.pull_requests.map((pull_request) =>
				pkg.package_json?.homepage &&
				(!filter_pull_request || filter_pull_request(pull_request, pkg))
					? {pkg, pull_request}
					: null!,
			);
		})
		.filter(Boolean);

export const to_pull_url = (repo_url: string, pull: Github_Pull_Request): string =>
	ensure_end(repo_url, '/') + 'pull/' + pull.number;
