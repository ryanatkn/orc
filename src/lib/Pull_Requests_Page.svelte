<script lang="ts">
	import Pull_Requests_Detail from '$lib/Pull_Requests_Detail.svelte';
	import Page_Header from '$lib/Page_Header.svelte';
	import Page_Footer from '$lib/Page_Footer.svelte';
	import type {Filter_Pull_Request} from '$lib/github_helpers.js';
	import type {Fetched_Deployment, Unfetched_Deployment} from '$lib/fetch_deployments.js';

	export let deployment: Fetched_Deployment;
	export let deployments: Fetched_Deployment[];
	export let unfetched_deployments: Unfetched_Deployment[];

	export let filter_pull_request: Filter_Pull_Request | undefined = undefined;
</script>

<svelte:head>
	<title>pull requests {deployment.package_json.icon} {deployment.package_json.name}</title>
</svelte:head>

<main class="box width_full">
	<section>
		<Page_Header pkg={deployment} />
	</section>
	<section>
		<Pull_Requests_Detail {deployments} {unfetched_deployments} {filter_pull_request} />
	</section>
	<section class="box">
		<Page_Footer pkg={deployment} />
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
