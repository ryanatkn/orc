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
	const key = to_fetch_cache_key(url, params);
	const cached = cache?.get(key);
	if (cache?.has(key)) {
		return cache.get(key)!;
	}
	const headers: Record<string, string> = {};
	if (token) headers.authorization = 'token ' + token;
	const etag = cached?.etag;
	if (etag) {
		headers['if-none-match'] = etag;
	}
	console.log(`fetching PRs with headers`, headers);
	const res = await request('GET /repos/{owner}/{repo}/pulls', {
		headers,
		...params,
	});
	log?.info(`res.url`, res.url);
	log?.info(`res.status`, res.status);
	log?.info(`res.headers`, res.headers);
	return {
		url,
		params,
		key,
		etag: res.headers.etag ?? null,
		data: res.data.map((i) => GithubPullRequest.parse(i)),
	};
};
