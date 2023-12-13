<script lang="ts">
	import Breadcrumb from '@fuz.dev/fuz_library/Breadcrumb.svelte';

	import Deployments_Tree from '$lib/Deployments_Tree.svelte';
	import Page_Header from '$routes/Page_Header.svelte';
	import Page_Footer from '$routes/Page_Footer.svelte';
	import {package_json} from '$routes/package.js';
	import {get_deployments} from '$lib/deployments.js';

	const {pkg, pkgs} = get_deployments();

	// TODO ideally there would be one `Deployments_Tree` mounted by the layout
</script>

<svelte:head>
	<title>tree {package_json.icon} {pkg.name}</title>
</svelte:head>

<main class="box width_full">
	<section>
		<Page_Header {pkg} />
	</section>
	<section class="tree">
		<Deployments_Tree {pkgs}>
			<div slot="nav" class="deployments_tree_nav">
				<Breadcrumb>{package_json.icon}</Breadcrumb>
			</div>
		</Deployments_Tree>
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
