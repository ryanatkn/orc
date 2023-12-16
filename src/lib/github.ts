import type {Logger} from '@grogarden/util/log.js';
import type {Package_Meta} from '@fuz.dev/fuz_library/package_meta.js';
import {z} from 'zod';
import {fetch_value, type Fetch_Cache_Data} from '@grogarden/util/fetch.js';

export const Github_Pull_Request = z.object({
	number: z.number(),
	title: z.string(),
	user: z.object({
		login: z.string(),
	}),
	draft: z.boolean(),
});
export type Github_Pull_Request = z.infer<typeof Github_Pull_Request>;

export const Github_Pull_Requests = z.array(Github_Pull_Request);
export type Github_Pull_Requests = z.infer<typeof Github_Pull_Requests>;

/**
 * @see https://docs.github.com/en/rest/checks/runs#list-check-runs-for-a-git-reference
 */
export const Github_Check_Runs = z.object({
	status: z.enum(['queued', 'in_progress', 'completed']),
	conclusion: z
		.enum(['success', 'failure', 'neutral', 'cancelled', 'skipped', 'timed_out', 'action_required'])
		.nullable(),
});
export type Github_Check_Runs = z.infer<typeof Github_Check_Runs>;

// TODO refactor with `fetch_package_json` and `fetch_github_check_runs`
/**
 * @see https://docs.github.com/en/rest/pulls/pulls#list-pull-requests
 */
export const fetch_github_pull_requests = async (
	pkg: Package_Meta,
	cache?: Fetch_Cache_Data,
	log?: Logger,
	token?: string,
	api_version?: string,
): Promise<Github_Pull_Requests | null> => {
	if (!pkg.owner_name) throw Error('owner_name is required');
	const headers = api_version ? new Headers({'x-github-api-version': api_version}) : undefined;
	const url = `https://api.github.com/repos/${pkg.owner_name}/${pkg.repo_name}/pulls`;
	const fetched = await fetch_value(url, {
		request: {headers},
		parse: Github_Pull_Requests.parse,
		token,
		cache,
		log,
	});
	if (!fetched.ok) return null;
	return fetched.value;
};

// TODO refactor with `fetch_package_json` and `fetch_github_pull_requests`
/**
 * @see https://docs.github.com/en/rest/pulls/pulls#list-pull-requests
 */
export const fetch_github_check_runs = async (
	pkg: Package_Meta,
	cache?: Fetch_Cache_Data,
	log?: Logger,
	token?: string,
	api_version?: string,
	ref = 'main',
): Promise<Github_Check_Runs | null> => {
	if (!pkg.owner_name) throw Error('owner_name is required');
	const headers = api_version ? new Headers({'x-github-api-version': api_version}) : undefined;
	const url = `https://api.github.com/repos/${pkg.owner_name}/${pkg.repo_name}/commits/${ref}/check-runs`;
	const fetched = await fetch_value(url, {
		request: {headers},
		parse: (v) => reduce_check_runs(v.check_runs.map((i) => Github_Check_Runs.parse(i))),
		token,
		cache,
		log,
	});
	if (!fetched.ok) return null;
	return fetched.value;
};

const reduce_check_runs = (check_runs: Github_Check_Runs[]): Github_Check_Runs | null => {
	console.log(`REDUCING check_runs`, check_runs);
	if (!check_runs.length) return null;
	let status!: Github_Check_Runs['status'];
	let conclusion!: Github_Check_Runs['conclusion'];
	for (const check_run of check_runs) {
		if (!status || status === 'completed') {
			status = check_run.status;
		}
		if (!conclusion || conclusion === 'success') {
			conclusion = check_run.conclusion;
		}
	}
	return {status, conclusion};
};
