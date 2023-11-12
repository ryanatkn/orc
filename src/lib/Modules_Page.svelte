<script lang="ts">
	import Breadcrumb from '@fuz.dev/fuz_library/Breadcrumb.svelte';

	import Page_Header from '$lib/Page_Header.svelte';
	import Page_Footer from '$lib/Page_Footer.svelte';
	import Modules_Detail from '$lib/Modules_Detail.svelte';
	import type {Fetched_Package} from '$lib/fetch_packages.js';

	export let pkg: Fetched_Package;
	export let pkgs: Fetched_Package[];
</script>

<svelte:head>
	<title>modules {pkg.package_json.icon} {pkg.package_json.name}</title>
</svelte:head>

<main class="box width_full">
	<section>
		<Page_Header {pkg} />
	</section>
	<section>
		<Modules_Detail {pkgs}>
			<div slot="nav" class="row">
				<Breadcrumb>{pkg.package_json.icon}</Breadcrumb>
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
