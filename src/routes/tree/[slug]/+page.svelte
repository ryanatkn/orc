<script lang="ts">
	import {page} from '$app/stores';
	import Alert from '@fuz.dev/fuz_library/Alert.svelte';
	import Breadcrumb from '@fuz.dev/fuz_library/Breadcrumb.svelte';

	import Page_Header from '$routes/Page_Header.svelte';
	import Page_Footer from '$routes/Page_Footer.svelte';
	import {package_json} from '$lib/package.js';
	import Packages_Tree from '$lib/Packages_Tree.svelte';
	import {get_packages} from '$lib/packages';

	const {pkg, pkgs} = get_packages();

	// TODO ideally there would be one `Packages_Tree` mounted by the layout

	$: slug = $page.params.slug;

	// TODO hacky

	// TODO hacky
	$: route_pkg = pkgs.find((p) => p.repo_name === slug);
</script>

<svelte:head>
	<title>{slug} - tree {package_json.icon} {package_json.name}</title>
</svelte:head>

<main class="box width_full">
	<section>
		<Page_Header {pkg} />
	</section>
	<section class="tree">
		{#if !route_pkg}
			<div class="spaced">
				<Alert status="error"><p>cannot find <code>{slug}</code></p></Alert>
			</div>
		{/if}
		<Packages_Tree {pkgs} selected_pkg={route_pkg}>
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
	.packages_tree_nav {
		display: flex;
		margin-top: var(--spacing_1);
	}
	/* TODO hacky */
	.packages_tree_nav :global(.breadcrumb) {
		justify-content: flex-start;
	}
</style>
