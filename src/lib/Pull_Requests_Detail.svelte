<script lang="ts">
	import {parse_package_meta} from '@fuz.dev/fuz_library/package_meta.js';
	import type {Maybe_Fetched_Package} from '@ryanatkn/orc/fetch_packages.js';
	import type {Github_Pull_Request} from '@ryanatkn/orc/github.js';

	export let packages: Maybe_Fetched_Package[];

	// TODO BLOCK unfinished
	interface Filter_Pull_Request {
		(pull: Github_Pull_Request, pkg: Maybe_Fetched_Package): boolean;
	}
	// TODO BLOCK filter, with orc config? probably with a function? or list of logins? complex config object?
	export let filter_pull_request: Filter_Pull_Request = (pull) => pull.user.login === 'ryanatkn';

	$: pull_requests = packages
		.flatMap((pkg) => {
			if (!pkg.pulls) return null!;
			// TODO hacky, figure out the data structure
			return pkg.pulls.map((pull) =>
				pkg.package_json?.homepage && filter_pull_request(pull, pkg)
					? {
							pkg: parse_package_meta(pkg.package_json.homepage, pkg.package_json),
							pull,
					  }
					: null!,
			);
		})
		.filter(Boolean);
</script>

<div class="width_md">
	<table>
		<thead><th>repo</th><th>number</th><th>title</th></thead>
		{#each pull_requests as pull_request}
			{#if pull_request.pkg.repo_url}
				<tr>
					<td
						><a href={pull_request.pkg.repo_url}
							>{#if pull_request.pkg.package_json.icon}{pull_request.pkg.package_json
									.icon}{' '}{/if}{pull_request.pkg.repo_name}</a
						></td
					>
					<td
						><a
							href="https://github.com/{pull_request.pkg.repo_url}/{pull_request.pull.number}"
							title={pull_request.pull.title}>#{pull_request.pull.number}</a
						></td
					>
					<td><div>{pull_request.pull.title}</div></td>
				</tr>
			{/if}
		{/each}
	</table>
</div>

<style>
	th,
	td {
		padding: 0 var(--spacing_md);
	}
</style>
