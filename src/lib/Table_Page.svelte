<script lang="ts">
	import Page_Header from '$lib/Page_Header.svelte';
	import Deployments_Table from '$lib/Deployments_Table.svelte';
	import Page_Footer from '$lib/Page_Footer.svelte';
	import type {Fetched_Deployment} from '$lib/fetch_deployments.js';

	export let deployment: Fetched_Deployment;
	export let deployments: Fetched_Deployment[];
</script>

<svelte:head>
	<title>table {deployment.package_json.icon} {deployment.package_json.name}</title>
</svelte:head>

<main class="box">
	<section>
		<Page_Header pkg={deployment} />
	</section>
	<section>
		<div class="panel padded_md">
			<Deployments_Table {deployments} />
		</div>
	</section>
	<section class="box">
		<Page_Footer pkg={deployment} />
	</section>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
	}
	section {
		margin-bottom: var(--spacing_4);
	}
	section:first-child {
		margin-top: var(--spacing_4);
	}
</style>
