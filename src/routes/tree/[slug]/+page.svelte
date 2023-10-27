<script lang="ts">
	import LibraryFooter from '@fuz.dev/fuz_library/LibraryFooter.svelte';
	import PackageDetail from '@fuz.dev/fuz_library/PackageDetail.svelte';
	import {parse_package_meta} from '@fuz.dev/fuz_library/package_meta.js';
	import {page} from '$app/stores';

	import packages from '$lib/packages.json';
	import PageHeader from '$routes/PageHeader.svelte';
	import PageFooter from '$routes/PageFooter.svelte';

	$: slug = $page.params.slug;

	// TODO hacky
	const pkgs = packages
		.map(({url, package_json}) => (package_json ? parse_package_meta(url, package_json) : null!))
		.filter(Boolean);

	// TODO hacky
	$: pkg = pkgs.find((p) => p.repo_name === slug);

	const orc_pkg = pkgs.find((p) => p.url === 'https://orc.ryanatkn.com/')!;
</script>

<main class="box width_full">
	<section>
		<PageHeader />
	</section>
	<section>
		{#if pkg}
			<PackageDetail {pkg} />
		{:else}
			cannot find <code>{slug}</code>
		{/if}
	</section>
	<section>
		<LibraryFooter pkg={orc_pkg} root_url="https://www.ryanatkn.com/" />
		<PageFooter />
	</section>
</main>

<style>
	section {
		width: 100%;
		margin-bottom: var(--spacing_4);
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
	section:first-child {
		margin-top: var(--spacing_4);
	}
</style>
