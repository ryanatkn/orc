<script lang="ts">
	import {page} from '$app/stores';
	import Alert from '@fuz.dev/fuz_library/Alert.svelte';
	import Breadcrumb from '@fuz.dev/fuz_library/Breadcrumb.svelte';

	import Page_Header from '$lib/Page_Header.svelte';
	import Page_Footer from '$lib/Page_Footer.svelte';
	import {package_json} from '$routes/package.js';
	import Deployments_Tree from '$lib/Deployments_Tree.svelte';
	import {get_deployments} from '$lib/deployments';

	const {deployment, deployments} = get_deployments();

	// TODO ideally there would be one `Deployments_Tree` mounted by the layout

	$: slug = $page.params.slug;

	// TODO hacky

	// TODO hacky
	$: route_deployment = deployments.find((p) => p.repo_name === slug);
</script>

<svelte:head>
	<title>{slug} - tree {package_json.icon} {package_json.name}</title>
</svelte:head>

<main class="box width_full">
	<section>
		<Page_Header pkg={deployment} />
	</section>
	<section class="tree">
		{#if !route_deployment}
			<div class="spaced">
				<Alert status="error"><p>cannot find <code>{slug}</code></p></Alert>
			</div>
		{/if}
		<Deployments_Tree {deployments} selected_deployment={route_deployment}>
			<div slot="nav" class="deployments_tree_nav">
				<Breadcrumb>{package_json.icon}</Breadcrumb>
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
		flex-wrap: wrap;
		justify-content: center;
	}
	section:first-child {
		margin-top: var(--spacing_4);
	}
	.tree {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
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
