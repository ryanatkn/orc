import type {Logger} from '@grogarden/util/log.js';
import type {PackageMeta} from '@fuz.dev/fuz_library/package_meta.js';
import {request} from '@octokit/request';
import {z} from 'zod';

export const GithubIssue = z.object({
	number: z.number(),
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
