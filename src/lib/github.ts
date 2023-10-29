import type {Logger} from '@grogarden/util/log.js';
import type {PackageMeta} from '@fuz.dev/fuz_library/package_meta.js';
import {request} from '@octokit/request';
import {z} from 'zod';
import {to_fetch_cache_key, type FetchCache, type FetchCacheItem} from './fetch_cache';

export const GithubPullRequest = z.object({
	url: z.string(),
	id: z.number(),
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
export type GithubPullRequest = z.infer<typeof GithubPullRequest>;

// TODO refactor with `fetch_package_json`
export const fetch_github_pull_requests = async (
	url: string,
	pkg: PackageMeta,
	cache?: FetchCache,
	log?: Logger,
	token?: string,
): Promise<FetchCacheItem<GithubPullRequest[] | null>> => {
	log?.info('url', url);
	if (!pkg.owner_name) throw Error('owner_name is required');
	const params = {owner: pkg.owner_name, repo: pkg.repo_name, sort: 'updated'} as const;
	const headers: Record<string, string> = {};
	if (token) headers.authorization = 'token ' + token;
	const key = to_fetch_cache_key(url, params);
	const cached = cache?.get(key);
	const etag = cached?.etag;
	if (etag) {
		headers['if-none-match'] = etag;
	}
	try {
		const res = await request('GET /repos/{owner}/{repo}/pulls', {
			headers,
			...params,
		});
		log?.info('not cached', key);
		const result: FetchCacheItem<GithubPullRequest[] | null> = {
			url,
			params,
			key,
			etag: res.headers.etag ?? null,
			data: res.data.map((i) => GithubPullRequest.parse(i)),
		};
		cache?.set(result.key, result);
		return result;
	} catch (err) {
		// TODO proper error handling?
		if (err.status === 304) {
			log?.info('cached', key);
			return cached!;
		}
		const result: FetchCacheItem<GithubPullRequest[] | null> = {
			url,
			params,
			key,
			etag: null,
			data: null,
		};
		return result;
	}
};
