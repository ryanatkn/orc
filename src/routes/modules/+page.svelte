<script lang="ts">
	import LibraryFooter from '@fuz.dev/fuz_library/LibraryFooter.svelte';
	import {parse_package_meta} from '@fuz.dev/fuz_library/package_meta.js';

	import packages from '$lib/packages.json';
	import Page_Header from '$routes/Page_Header.svelte';
	import Page_Footer from '$routes/Page_Footer.svelte';
	import Modules_Detail from '$lib/Modules_Detail.svelte';

	// TODO hacky
	const pkgs = packages.map(({url, package_json}) =>
		package_json ? parse_package_meta(url, package_json) : {url, package_json: null},
	);

	const pkg = pkgs[0];
</script>

<main class="box width_full">
	<section>
		<Page_Header />
	</section>
	<section>
		<Modules_Detail {pkgs} />
	</section>
	<section class="box">
		{#if pkg.package_json}
			<LibraryFooter {pkg} root_url="https://www.spiderspace.org/" />
		{/if}
		<Page_Footer />
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
