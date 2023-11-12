<script lang="ts">
	import Breadcrumb from '@fuz.dev/fuz_library/Breadcrumb.svelte';

	import Packages_Tree from '$lib/Packages_Tree.svelte';
	import Page_Header from '$lib/Page_Header.svelte';
	import Page_Footer from '$lib/Page_Footer.svelte';
	import {package_json} from '$lib/package.js';
	import {get_packages} from '$lib/packages.js';

	const {pkg, pkgs} = get_packages();

	// TODO ideally there would be one `Packages_Tree` mounted by the layout
</script>

<svelte:head>
	<title>tree {package_json.icon} {pkg.name}</title>
</svelte:head>

<main class="box width_full">
	<section>
		<Page_Header {pkg} />
	</section>
	<section class="tree">
		<Packages_Tree {pkgs}>
			<div slot="nav" class="packages_tree_nav">
				<Breadcrumb>{package_json.icon}</Breadcrumb>
			</div>
		</Packages_Tree>
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
	.packages_tree_nav {
		display: flex;
		margin-top: var(--spacing_1);
	}
	/* TODO hacky */
	.packages_tree_nav :global(.breadcrumb) {
		justify-content: flex-start;
	}
</style>
