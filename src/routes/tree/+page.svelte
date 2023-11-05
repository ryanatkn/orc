<script lang="ts">
	import {parse_package_meta} from '@fuz.dev/fuz_library/package_meta.js';

	import Packages_Tree from '$lib/Packages_Tree.svelte';
	import packages from '$lib/packages.json';
	import Page_Header from '$routes/Page_Header.svelte';
	import Page_Footer from '$routes/Page_Footer.svelte';
	import {package_json} from '$lib/package.js';

	// TODO hacky
	const pkgs = packages.map(({url, package_json}) =>
		package_json ? parse_package_meta(url, package_json) : {url, package_json: null},
	);

	// TODO hacky, and copypaste error?
	const pkg = parse_package_meta(package_json.homepage, package_json);
</script>

<svelte:head>
	<title>tree {package_json.icon} {pkg.name}</title>
</svelte:head>

<main class="box width_full">
	<section>
		<Page_Header />
	</section>
	<section class="tree">
		<Packages_Tree {pkgs} />
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
</style>
