import type {EntryGenerator} from './$types';

import packages from '$lib/packages.json';
import {parse_packages} from '$lib/packages.js';

const {pkgs} = parse_packages(packages);

export const entries: EntryGenerator = async () => {
	return pkgs.map((pkg) => {
		return {slug: pkg.repo_name};
	});
};
