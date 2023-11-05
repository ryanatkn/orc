<script lang="ts">
	import Package_Summary from '@fuz.dev/fuz_library/Package_Summary.svelte';
	import Package_Detail from '@fuz.dev/fuz_library/Package_Detail.svelte';
	import type {Package_Meta} from '@fuz.dev/fuz_library/package_meta.js';
	import {strip_end, strip_start} from '@grogarden/util/string.js';
	import {base} from '$app/paths';

	// TODO hacky
	export let pkgs: Array<
		| Package_Meta
		| {
				url: string;
				package_json: null;
		  }
	>;

	/**
	 * The selected package, if any.
	 */
	export let pkg: Package_Meta | undefined = undefined;
</script>

<div class="packages_tree">
	<menu class="names panel padded_md">
		{#each pkgs as pkg}
			<li style:display="contents">
				{#if pkg.package_json}<a class="menu_item nowrap" href="{base}/tree/{pkg.repo_name}"
						>{pkg.repo_name}{#if pkg.package_json.icon}{' '}{pkg.package_json.icon}{/if}</a
					>{/if}
			</li>
		{/each}
	</menu>
	<div>
		{#if pkg}
			<section>
				<Package_Detail {pkg} />
			</section>
		{/if}
		<menu class="summaries">
			{#each pkgs as pkg}
				<li class="panel padded_md box">
					{#if pkg.package_json}
						<Package_Summary {pkg}>
							<svelte:fragment slot="repo_name" let:repo_name>
								<a href="{base}/tree/{repo_name}" class="repo_name">{repo_name}</a>
							</svelte:fragment>
						</Package_Summary>
					{:else}
						<div class="prose width_sm">
							<p>
								failed to fetch <code>.well-known/package.json</code> from
								<a href={pkg.url}>{strip_end(strip_start(pkg.url, 'https://'), '/')}</a>
							</p>
						</div>
					{/if}
				</li>
			{/each}
		</menu>
	</div>
</div>

<style>
	.packages_tree {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
	}
	.names {
		padding: var(--spacing_md);
		margin-left: var(--spacing_md);
		position: sticky;
		top: var(--spacing_md);
	}
	/* TODO should be a CSS class */
	.names a:hover {
		background-color: var(--bg_5);
	}
	.names a:is(:active, .active) {
		background-color: var(--bg_7);
	}
	.summaries {
		gap: var(--spacing_lg);
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
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
</style>
