<script lang="ts">
	import Breadcrumb from '@fuz.dev/fuz_library/Breadcrumb.svelte';

	import Deployments_Tree from '$lib/Deployments_Tree.svelte';
	import Page_Header from '$lib/Page_Header.svelte';
	import Page_Footer from '$lib/Page_Footer.svelte';
	import type {Fetched_Deployment} from '$lib/fetch_deployments.js';

	export let deployment: Fetched_Deployment;
	export let deployments: Fetched_Deployment[];

	// TODO ideally there would be one `Deployments_Tree` mounted by the layout with transitions
</script>

<svelte:head>
	<title>tree {deployment.package_json.icon} {deployment.name}</title>
</svelte:head>

<main class="box width_full">
	<section>
		<Page_Header pkg={deployment} />
	</section>
	<section class="tree">
		<Deployments_Tree {deployments}>
			<div slot="nav" class="deployments_tree_nav">
				<Breadcrumb>{deployment.package_json.icon}</Breadcrumb>
			</div>
		</Deployments_Tree>
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
		justify-content: center;
	}
	section:first-child {
		margin-top: var(--spacing_4);
	}
	.tree {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
	}
	.deployments_tree_nav {
		display: flex;
		margin-top: var(--spacing_1);
	}
	/* TODO hacky */
	.deployments_tree_nav :global(.breadcrumb) {
		justify-content: flex-start;
	}
</style>
