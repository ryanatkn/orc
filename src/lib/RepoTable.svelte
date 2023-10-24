<script lang="ts">
	import {format_host} from '@fuz.dev/fuz_library/package_meta.js';
	import {page} from '$app/stores';

	import type {FetchedPackageMeta} from '$lib/fetch_packages.js';

	export let pkgs: FetchedPackageMeta[];
	export let deps = ['@fuz.dev/fuz', '@fuz.dev/fuz_library', '@grogarden/gro', '@grogarden/util'];

	// TODO gray out the latest of each version for deps, but only if the max is knowable via a local dep, don't assume for externals

	// TODO hacky, handle regular deps too
	const lookup_dep = (pkg: FetchedPackageMeta, dep: string): string => {
		if (!pkg.package_json) return ''; // TODO null
		for (const key in pkg.package_json.dependencies) {
			if (key === dep) {
				return pkg.package_json.dependencies[key];
			}
		}
		for (const key in pkg.package_json.devDependencies) {
			if (key === dep) {
				return pkg.package_json.devDependencies[key];
			}
		}
		return '';
	};

	$: dep_packages = pkgs.map((pkg) => deps.map((dep) => lookup_dep(pkg, dep)));
</script>

<table>
	<thead
		><th>homepage</th><th>repo</th><th>version</th><th>npm</th>{#each deps as dep (dep)}<th
				>{dep}</th
			>{/each}</thead
	>
	{#each pkgs as pkg}
		{@const package_json = pkg.package_json}
		{@const homepage_url = package_json ? pkg.homepage_url : null}
		<tr>
			<td>
				<div class="row">
					{#if homepage_url}
						<a class:active={homepage_url === $page.url.href} href={homepage_url}>
							{format_host(homepage_url)}
						</a>
					{/if}
				</div>
			</td>
			<td>
				<div class="row">
					{#if package_json}
						<a href={pkg.repo_url}>{pkg.repo_name}</a>
					{:else}
						{pkg.url}
					{/if}
				</div>
			</td>
			<td>
				{#if package_json && package_json.version !== '0.0.1'}
					<a href={pkg.changelog_url}>{package_json.version}</a>
				{/if}
			</td>
			<td>
				{#if package_json && pkg.npm_url}
					<div class="row">
						<a href={pkg.npm_url}><code>{pkg.name}</code></a>
					</div>
				{/if}
			</td>
			{#each deps as dep (dep)}<td>{lookup_dep(pkg, dep)}</td>{/each}
		</tr>
	{/each}
</table>

<style>
	/* TODO add basic table styles upstream and delete this */
	th {
		text-align: left;
	}
	th,
	td {
		padding: 0 var(--spacing_xs);
	}
	tr:hover {
		background-color: var(--bg_5);
	}
</style>
