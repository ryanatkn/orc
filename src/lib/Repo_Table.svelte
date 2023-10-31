<script lang="ts">
	import {format_host} from '@fuz.dev/fuz_library/package_meta.js';
	import {page} from '$app/stores';
	import {base} from '$app/paths';
	import {ensure_end, strip_end} from '@grogarden/util/string.js';

	import type {Fetched_Package_Meta} from '$lib/fetch_packages.js';

	export let pkgs: Fetched_Package_Meta[];
	export let deps = ['@fuz.dev/fuz', '@fuz.dev/fuz_library', '@grogarden/gro']; // TODO add felt

	// TODO fade out the `version` column if all deps are upgraded to the latest

	// TODO gray out the latest of each version for deps, but only if the max is knowable via a local dep, don't assume for externals

	// TODO hacky, handle regular deps too
	const lookup_dep_version = (pkg: Fetched_Package_Meta, dep: string): string | null => {
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

	const format_version = (version: string | null): string =>
		version === null ? '' : version.replace(/^(\^|>=)\s*/u, '');

	const lookup_pulls = (pkgs: Fetched_Package_Meta[] | null, pkg: Fetched_Package_Meta) => {
		const found = pkgs?.find((p) => p.url === pkg.url);
		if (!found?.package_json) return null;
		const {pulls} = found;
		return pulls;
	};
</script>

<table>
	<thead>
		<th>detail</th>
		<th>homepage</th>
		<th>repo</th>
		<th>npm</th>
		<th>version</th>
		{#each deps as dep (dep)}
			<th>{dep}</th>
		{/each}
		<th>pull requests</th>
	</thead>
	{#each pkgs as pkg}
		{@const package_json = pkg.package_json}
		{@const homepage_url = package_json ? pkg.homepage_url : null}
		<tr>
			<td>
				<div class="row">
					{#if package_json}
						<a href="{base}/tree/{pkg.repo_name}">🌳</a>
					{/if}
				</div>
			</td>
			<td>
				<div class="row">
					{#if homepage_url}
						<a class:active={homepage_url === $page.url.href} href={homepage_url} class="row">
							<img
								src="{ensure_end(homepage_url, '/')}favicon.png"
								alt="favicon to homepage at {homepage_url}"
								style:width="16px"
								style:height="16px"
								style:margin-right="var(--spacing_xs)"
							/>
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
				{#if package_json && pkg.npm_url}
					<div class="row">
						<a href={pkg.npm_url}><code>{pkg.name}</code></a>
					</div>
				{/if}
			</td>
			<td>
				{#if package_json && package_json.version !== '0.0.1'}
					<a href={pkg.changelog_url}>{format_version(package_json.version)}</a>
				{/if}
			</td>
			{#each deps as dep (dep)}
				{@const dep_version = lookup_dep_version(pkg, dep)}
				{@const formatted_dep_version = format_version(dep_version)}
				{@const dep_latest_version = latest_version_by_dep.get(dep)}
				<td>
					<div class:latest={!!dep_latest_version && formatted_dep_version === dep_latest_version}>
						{formatted_dep_version}
					</div>
				</td>
			{/each}
			<td>
				{#if package_json && pkg.repo_url}
					{@const pulls = lookup_pulls(pkgs, pkg)}
					<!-- TODO show something like `and N more` with a link to a dialog list -->
					<div class="row">
						{#if pulls}
							{#each pulls as pull (pull)}
								<a
									href="{strip_end(pkg.repo_url, '/')}/pull/{pull.number}"
									class="chip"
									title={pull.title}>#{pull.number}</a
								>
							{/each}
						{/if}
					</div>
				{/if}
			</td>
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
