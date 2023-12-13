import type {EntryGenerator} from './$types';

import deployments from '$lib/deployments.json';
import {parse_deployments} from '$lib/deployments.js';

const {pkgs} = parse_deployments(deployments);

export const entries: EntryGenerator = async () => {
	return pkgs.map((pkg) => {
		return {slug: pkg.repo_name};
	});
};
