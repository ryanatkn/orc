import type {EntryGenerator} from './$types';
import {parse_package_meta} from '@fuz.dev/fuz_library/package_meta.js';

import packages from '$lib/packages.json';

const pkgs = packages
	.map(({url, package_json, src_json}) =>
		package_json && src_json ? parse_package_meta(url, package_json, src_json) : null!,
	)
	.filter(Boolean);

export const entries: EntryGenerator = async () => {
	return pkgs.map((pkg) => {
		return {slug: pkg.repo_name};
	});
};
