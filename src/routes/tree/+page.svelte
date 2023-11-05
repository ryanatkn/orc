<script lang="ts">
	import Package_Summary from '@fuz.dev/fuz_library/Package_Summary.svelte';
	import {parse_package_meta} from '@fuz.dev/fuz_library/package_meta.js';
	import {strip_end, strip_start} from '@grogarden/util/string.js';
	import {base} from '$app/paths';

	import packages from '$lib/packages.json';
	import Page_Header from '$routes/Page_Header.svelte';
	import Page_Footer from '$routes/Page_Footer.svelte';
	import {package_json} from '$lib/package.js';

	// TODO BLOCK extract a component

	// TODO hacky
	const pkgs = packages.map(({url, package_json}) =>
		package_json ? parse_package_meta(url, package_json) : {url, package_json: null},
	);

	// TODO hacky, and copypaste error?
	const pkg = parse_package_meta(package_json.homepage, package_json);
</script>

<svelte:head>
	<title>tree {package_json.icon} {pkg.name}</title>
</svelte:head>

<main class="box width_full">
	<section>
		<Page_Header />
	</section>
	<section class="tree">
		<menu class="names panel padded_md">
			{#each pkgs as pkg}
				<li>
					{#if pkg.package_json}<a class="menu_item nowrap" href="{base}/tree/{pkg.repo_name}"
							>{pkg.repo_name}{#if pkg.package_json.icon}{' '}{pkg.package_json.icon}{/if}</a
						>{/if}
				</li>
			{/each}
		</menu>
		<menu class="summaries">
			<!-- TODO Package_Summary -->
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
	</section>
	<section class="box">
		<Page_Footer {pkg} />
	</section>
</main>

<style>
	section {
		width: 100%;
		margin-bottom: var(--spacing_4);
		display: flex;
		justify-content: center;
	}
	section:first-child {
		margin-top: var(--spacing_4);
	}
	.names {
		padding: var(--spacing_md);
		margin-left: var(--spacing_md);
		position: sticky;
		top: var(--spacing_md);
	}
	.tree {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
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
