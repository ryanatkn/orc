<script lang="ts">
	import {parse_package_meta} from '@fuz.dev/fuz_library/package_meta.js';

	import Pull_Requests_Detail from '$lib/Pull_Requests_Detail.svelte';
	import packages from '$lib/packages.json';
	import Page_Header from '$routes/Page_Header.svelte';
	import Page_Footer from '$routes/Page_Footer.svelte';
	import {package_json} from '$lib/package.js';

	const pkg = parse_package_meta(package_json.homepage, package_json);
</script>

<svelte:head>
	<title>@ryanatkn/orc: pull requests</title>
</svelte:head>

<main class="box width_full">
	<section>
		<Page_Header />
	</section>
	<section>
		<Pull_Requests_Detail {packages} />
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
