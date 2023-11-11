import type {Package_Meta} from '@fuz.dev/fuz_library/package_meta.js';

import type {Github_Pull_Request} from '$lib/github.js';
import type {Fetched_Package, Maybe_Fetched_Package} from '$lib/fetch_packages.js';

export interface Filter_Pull_Request {
	(pull_request: Github_Pull_Request, pkg: Maybe_Fetched_Package): boolean;
}

export interface Pull_Request_Meta {
	pkg: Package_Meta;
	pull_request: Github_Pull_Request;
}

export const to_pull_requests = (
	packages: Fetched_Package[],
	filter_pull_request?: Filter_Pull_Request,
): Pull_Request_Meta[] =>
	packages
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
