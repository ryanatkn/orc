<script lang="ts">
	import Package_Summary from '@fuz.dev/fuz_library/Package_Summary.svelte';
	import Package_Detail from '@fuz.dev/fuz_library/Package_Detail.svelte';
	import {strip_end, strip_start} from '@grogarden/util/string.js';
	import {base} from '$app/paths';

	import type {Fetched_Deployment} from '$lib/fetch_deployments.js';

	export let deployments: Fetched_Deployment[];

	/**
	 * The selected package, if any.
	 */
	export let selected_deployment: Fetched_Deployment | undefined = undefined;
</script>

<div class="deployments_tree">
	<div class="nav">
		<menu class="names panel padded_md">
			{#each deployments as deployment}
				{@const active = deployment === selected_deployment}
				<li style:display="contents">
					{#if deployment.package_json}<a
							class="menu_item"
							class:active
							href="{base}/tree/{deployment.repo_name}"
							><div class="ellipsis">
								{deployment.repo_name}{#if deployment.package_json.icon}{' '}{deployment
										.package_json.icon}{/if}
							</div></a
						>{/if}
				</li>
			{/each}
		</menu>
		<slot name="nav" />
	</div>
	{#if selected_deployment}
		<section class="detail_wrapper">
			<div class="panel detail">
				<Package_Detail pkg={selected_deployment} />
			</div>
		</section>
	{:else}
		<menu class="summaries">
			{#each deployments as deployment}
				<li class="panel padded_md box">
					{#if deployment.package_json}
						<Package_Summary pkg={deployment}>
							<svelte:fragment slot="repo_name" let:repo_name>
								<a href="{base}/tree/{repo_name}" class="repo_name">{repo_name}</a>
							</svelte:fragment>
						</Package_Summary>
					{:else}
						<div class="prose width_sm">
							<p>
								failed to fetch <code>.well-known/package.json</code> from
								<a href={deployment.url}
									>{strip_end(strip_start(deployment.url, 'https://'), '/')}</a
								>
							</p>
						</div>
					{/if}
				</li>
			{/each}
		</menu>
	{/if}
</div>

<style>
	.deployments_tree {
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: flex-start;
	}
	.nav {
		width: var(--nav_width, 240px);
		position: sticky;
		top: var(--spacing_md);
		padding: var(--spacing_lg);
		padding-right: 0;
	}
	.names {
		padding: var(--spacing_md);
	}
	/* TODO should be a CSS class or variable, probably add :focus behavior */
	.names a:hover {
		background-color: var(--bg_5);
	}
	.names a:is(:active, .active) {
		background-color: var(--bg_7);
	}
	.summaries {
		padding: var(--spacing_lg);
		gap: var(--spacing_lg);
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-items: flex-start;
	}
	.summaries li {
		margin-bottom: var(--spacing_1);
	}
	.repo_name {
		font-size: var(--size_2);
		font-weight: 500;
		text-align: center;
	}
	.detail_wrapper {
		padding: var(--spacing_lg);
		width: 100%;
	}
	.detail {
		display: flex;
	}
</style>
