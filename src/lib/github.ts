import type {Logger} from '@grogarden/util/log.js';
import type {Package_Meta} from '@fuz.dev/fuz_library/package_meta.js';
import {request} from '@octokit/request';
import {z} from 'zod';

import {
	to_fetch_cache_key,
	type Fetch_Cache_Data,
	type Fetch_Cache_Item,
} from '$lib/fetch_cache.js';

export const Github_Pull_Request = z.object({
	id: z.number(),
	url: z.string(),
	number: z.number(),
	state: z.enum(['open', 'closed', 'all']),
	title: z.string(),
	user: z.object({
		login: z.string(),
		id: z.number(),
		avatar_url: z.string(),
		url: z.string(),
	}),
	body: z.string().nullable(),
	created_at: z.string(),
	updated_at: z.string(),
	draft: z.boolean(),
});
export type Github_Pull_Request = z.infer<typeof Github_Pull_Request>;

/**
 * @see https://docs.github.com/en/rest/checks/runs#list-check-runs-for-a-git-reference
 */
export const Github_Check_Runs = z.object({
	id: z.number(),
	url: z.string().url(),
	html_url: z.string().url(),
	status: z.enum(['queued', 'in_progress', 'completed']),
	conclusion: z
		.enum(['success', 'failure', 'neutral', 'cancelled', 'skipped', 'timed_out', 'action_required'])
		.nullable(),
	started_at: z.string(),
	completed_at: z.string(),
	output: z.object({
		title: z.string().nullable(),
		summary: z.string().nullable(),
		text: z.string().nullable(),
		annotations_count: z.number(),
		annotations_url: z.string().url(),
	}),
});
export type Github_Check_Runs = z.infer<typeof Github_Check_Runs>;

// TODO refactor with `fetch_package_json` and `fetch_github_check_runs`
/**
 * @see https://docs.github.com/en/rest/pulls/pulls#list-pull-requests
 */
export const fetch_github_pull_requests = async (
	url: string,
	pkg: Package_Meta,
	cache?: Fetch_Cache_Data,
	log?: Logger,
	token?: string,
): Promise<Fetch_Cache_Item<Github_Pull_Request[] | null>> => {
	log?.info('url', url);
	if (!pkg.owner_name) throw Error('owner_name is required');
	const params = {owner: pkg.owner_name, repo: pkg.repo_name} as const; // defaults to `sort: 'created'`
	const headers: Record<string, string> = {
		accept: 'application/vnd.github+json', // might be set by the library, @see https://docs.github.com/en/rest/pulls/pulls?apiVersion=2022-11-28#list-pull-requests
	};
	if (token) headers.authorization = 'token ' + token;
	const route = 'GET /repos/{owner}/{repo}/pulls'; // TODO param
	const key = to_fetch_cache_key(route, params);
	const cached = cache?.get(key);
	const etag = cached?.etag;
	if (etag) {
		headers['if-none-match'] = etag;
	}
	try {
		const res = await request(route, {
			headers,
			...params,
		});
		log?.info('not cached', key);
		log?.info('res.headers', res.headers);
		const result: Fetch_Cache_Item<Github_Pull_Request[] | null> = {
			url,
			params,
			key,
			etag: res.headers.etag ?? null,
			last_modified: res.headers['last-modified'] ?? null,
			data: res.data.map((i) => Github_Pull_Request.parse(i)).sort((a, b) => b.number - a.number),
		};
		cache?.set(result.key, result);
		return result;
	} catch (err) {
		// TODO better error handling?
		if (err.status === 304) {
			log?.info('cached', key);
			return cached!;
		}
		const result: Fetch_Cache_Item<Github_Pull_Request[] | null> = {
			url,
			params,
			key,
			etag: null,
			last_modified: null,
			data: null,
		};
		return result;
	}
};

// TODO refactor with `fetch_package_json` and `fetch_github_pull_requests`
/**
 * @see https://docs.github.com/en/rest/pulls/pulls#list-pull-requests
 */
export const fetch_github_check_runs = async (
	url: string,
	pkg: Package_Meta,
	cache?: Fetch_Cache_Data,
	log?: Logger,
	token?: string,
	ref = 'main',
): Promise<Fetch_Cache_Item<Github_Check_Runs[] | null>> => {
	log?.info('url', url);
	if (!pkg.owner_name) throw Error('owner_name is required');
	const params = {owner: pkg.owner_name, repo: pkg.repo_name, ref} as const;
	const headers: Record<string, string> = {
		accept: 'application/vnd.github+json', // might be set by the library, @see https://docs.github.com/en/rest/pulls/pulls?apiVersion=2022-11-28#list-pull-requests
	};
	if (token) headers.authorization = 'token ' + token;
	const route = 'GET /repos/{owner}/{repo}/commits/{ref}/check-runs'; // TODO param
	const key = to_fetch_cache_key(route, params);
	const cached = cache?.get(key);
	const etag = cached?.etag;
	if (etag) {
		headers['if-none-match'] = etag;
	}
	try {
		const res = await request(route, {
			headers,
			...params,
		});
		log?.info('not cached', key);
		log?.info('res.headers', res.headers);
		console.log(`res.data`, res.data);
		const result: Fetch_Cache_Item<Github_Check_Runs[] | null> = {
			url,
			params,
			key,
			etag: res.headers.etag ?? null,
			last_modified: res.headers['last-modified'] ?? null,
			data: res.data.check_runs.map((i) => Github_Check_Runs.parse(i)),
		};
		cache?.set(result.key, result);
		return result;
	} catch (err) {
		// TODO better error handling?
		if (err.status === 304) {
			log?.info('cached', key);
			return cached!;
		}
		const result: Fetch_Cache_Item<Github_Check_Runs[] | null> = {
			url,
			params,
			key,
			etag: null,
			last_modified: null,
			data: null,
		};
		return result;
	}
};
