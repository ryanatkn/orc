import type {Logger} from '@grogarden/util/log.js';
import type {PackageMeta} from '@fuz.dev/fuz_library/package_meta.js';
import {request} from '@octokit/request';
import {z} from 'zod';

export const GithubIssue = z.object({
	url: z.string(),
	id: z.number(),
	node_id: z.string(),
	number: z.number(),
	state: z.enum(['open', 'closed', 'all']),
	title: z.string(),
	user: z.object({
		login: z.string(),
		id: z.number(),
		node_id: z.string(),
		avatar_url: z.string(),
		url: z.string(),
	}),
	body: z.string(),
	created_at: z.string(),
	updated_at: z.string(),
	draft: z.boolean(),
});
export type GithubIssue = z.infer<typeof GithubIssue>;

export const fetch_github_issues = async (
	url: string,
	pkg: PackageMeta,
	log?: Logger,
	token?: string,
): Promise<GithubIssue[] | null> => {
	log?.info('url', url);
	if (!pkg.owner_name) return null;
	const res = await request('GET /repos/{owner}/{repo}/pulls', {
		headers: {authorization: 'token ' + token},
		owner: pkg.owner_name,
		repo: pkg.repo_name,
		sort: 'updated',
	});
	log?.info(`res`, res);
	return res.data.map((i) => GithubIssue.parse(i));
};
