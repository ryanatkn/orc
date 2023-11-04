<script lang="ts">
	import {format_host} from '@fuz.dev/fuz_library/package_meta.js';

	import {split_packages, to_pull_requests, type Filter_Pull_Request} from '$lib/github_helpers.js';
	import type {Maybe_Fetched_Package} from '$lib/fetch_packages.js';

	export let packages: Maybe_Fetched_Package[];

	// TODO BLOCK filter, with orc config? probably with a function? or list of logins? complex config object?
	// maybe it's a default filter but all can be rendered? and it can be X'd out, but it's enabled by default?
	export let filter_pull_request: Filter_Pull_Request = (pull) => pull.user.login === 'ryanatkn';

	$: ({fetched, unfetched} = split_packages(packages));
	$: pull_requests = to_pull_requests(fetched, filter_pull_request);
</script>

<div class="width_md">
	<section>
		<table>
			<thead><th>repo</th><th>number</th><th>title</th></thead>
			{#each pull_requests as pull_request}
				<tr>
					<td
						><a href={pull_request.pkg.repo_url}
							>{#if pull_request.pkg.package_json.icon}{pull_request.pkg.package_json
									.icon}{' '}{/if}{pull_request.pkg.repo_name}</a
						></td
					>
					<td
						><a
							href="{pull_request.pkg.repo_url}/pull/{pull_request.pull_request.number}"
							title={pull_request.pull_request.title}>#{pull_request.pull_request.number}</a
						></td
					>
					<td><div>{pull_request.pull_request.title}</div></td>
				</tr>
			{/each}
		</table>
	</section>

	{#if unfetched.length}
		<section class="prose">
			<p>⚠️ Some packages could not be fetched:</p>
			<ul>
				{#each unfetched as { url }}
					<li><a href={url}>{format_host(url)}</a></li>
				{/each}
			</ul>
		</section>
	{/if}
</div>

<style>
	th,
	td {
		padding: 0 var(--spacing_md);
	}
	section {
		margin-bottom: var(--spacing_5);
	}
</style>
