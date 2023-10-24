<script lang="ts">
	import {format_host} from '@fuz.dev/fuz_library/package_meta.js';
	import {page} from '$app/stores';

	import type {FetchedPackageMeta} from '$lib/fetch_packages.js';

	export let pkgs: FetchedPackageMeta[];
	export let deps = ['@fuz.dev/fuz', '@fuz.dev/fuz_library', '@grogarden/gro', '@grogarden/util'];

	// TODO gray out the latest of each version for deps, but only if the max is knowable via a local dep, don't assume for externals

	// TODO hacky, handle regular deps too
	const lookup_dep_version = (pkg: FetchedPackageMeta, dep: string): string | null => {
		if (!pkg.package_json) return null;
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
		return null;
	};

	$: latest_version_by_dep = new Map<string, string | null>(
		deps.map((dep) => {
			const pkg = pkgs.find((pkg) => pkg.package_json?.name === dep);
			if (!pkg?.package_json) return [dep, null];
			return [dep, pkg.package_json.version];
		}),
	);
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
			{#each deps as dep (dep)}
				{@const dep_version = lookup_dep_version(pkg, dep)}
				{@const dep_latest_version = latest_version_by_dep.get(dep)}
				<td>
					<!-- TODO hacky with `endsWith`, handles `^` etc -->
					<div class:latest={!!dep_latest_version && dep_version?.endsWith(dep_latest_version)}>
						{dep_version ?? ''}
					</div>
				</td>
			{/each}
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
	.latest {
		/* TODO even lighter, add `--text_4` to Fuz probably, or change the scaling of `--text_2` and `--text_3` */
		color: var(--text_3);
		/* TODO this is too subtle as `--faded_1`, change in Fuz to either lighter or `--faded_2` */
		/* opacity: var(--disabled_opacity); */
		opacity: var(--faded_2);
	}
</style>
