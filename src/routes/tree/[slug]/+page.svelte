<script lang="ts">
	import Package_Detail from '@fuz.dev/fuz_library/Package_Detail.svelte';
	import {parse_package_meta} from '@fuz.dev/fuz_library/package_meta.js';
	import {page} from '$app/stores';

	import packages from '$lib/packages.json';
	import Page_Header from '$routes/Page_Header.svelte';
	import Page_Footer from '$routes/Page_Footer.svelte';
	import {package_json} from '$lib/package.js';

	$: slug = $page.params.slug;

	// TODO hacky
	const pkgs = packages
		.map(({url, package_json}) => (package_json ? parse_package_meta(url, package_json) : null!))
		.filter(Boolean);

	// TODO hacky
	$: route_pkg = pkgs.find((p) => p.repo_name === slug);

	// TODO hacky - maybe put in context?
	const pkg = parse_package_meta(package_json.homepage, package_json);
</script>

<main class="box width_full">
	<section>
		<Page_Header />
	</section>
	<section>
		{#if route_pkg}
			<Package_Detail pkg={route_pkg} />
		{:else}
			cannot find <code>{slug}</code>
		{/if}
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
		flex-wrap: wrap;
		justify-content: center;
	}
	section:first-child {
		margin-top: var(--spacing_4);
	}
</style>
