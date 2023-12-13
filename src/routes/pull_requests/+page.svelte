<script lang="ts">
	import Pull_Requests_Detail from '$lib/Pull_Requests_Detail.svelte';
	import packages from '$lib/packages.json';
	import Page_Header from '$routes/Page_Header.svelte';
	import Page_Footer from '$routes/Page_Footer.svelte';
	import {package_json} from '$routes/package.js';
	import type {Filter_Pull_Request} from '$lib/github_helpers.js';
	import {get_packages} from '$lib/packages.js';

	const {pkg} = get_packages();

	const filter_pull_request: Filter_Pull_Request = (pull) => pull.user.login === 'ryanatkn';
</script>

<svelte:head>
	<title>pull requests {package_json.icon} {package_json.name}</title>
</svelte:head>

<main class="box width_full">
	<section>
		<Page_Header {pkg} />
	</section>
	<section>
		<Pull_Requests_Detail {packages} {filter_pull_request} />
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
