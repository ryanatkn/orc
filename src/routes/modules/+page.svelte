<script lang="ts">
	import {parse_package_meta} from '@fuz.dev/fuz_library/package_meta.js';
	import Breadcrumb from '@fuz.dev/fuz_library/Breadcrumb.svelte';

	import packages from '$lib/packages.json';
	import Page_Header from '$routes/Page_Header.svelte';
	import Page_Footer from '$routes/Page_Footer.svelte';
	import Modules_Detail from '$lib/Modules_Detail.svelte';
	import {package_json} from '$lib/package.js';

	// TODO hacky
	const pkgs = packages.map(({url, package_json, src_json}) =>
		package_json
			? parse_package_meta(url, package_json, src_json)
			: {url, package_json: null, src_json: null},
	);

	const pkg = pkgs[0];
</script>

<svelte:head>
	<title>modules {package_json.icon} {package_json.name}</title>
</svelte:head>

<main class="box width_full">
	<section>
		<Page_Header />
	</section>
	<section>
		<Modules_Detail {pkgs}>
			<div slot="nav" class="row">
				<Breadcrumb>{package_json.icon}</Breadcrumb>
			</div>
		</Modules_Detail>
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
