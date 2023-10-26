<script lang="ts">
	import LibraryFooter from '@fuz.dev/fuz_library/LibraryFooter.svelte';
	import PackageDetail from '@fuz.dev/fuz_library/PackageDetail.svelte';
	import {parse_package_meta, type PackageMeta} from '@fuz.dev/fuz_library/package_meta.js';
	import type {PageData} from './$types';

	import packages from '$lib/packages.json';
	import PageHeader from '$routes/PageHeader.svelte';
	import PageFooter from '$routes/PageFooter.svelte';

	export let data: PageData;

	$: console.log(`data`, data);

	// TODO hacky
	const pkgs = packages.map(({url, package_json}) =>
		package_json ? parse_package_meta(url, package_json) : {url, package_json: null},
	);
	console.log(`pkgs`, pkgs);

	// TODO hacky
	const orc_pkg = pkgs.find((p) => p.url === 'https://orc.ryanatkn.com/') as PackageMeta;
</script>

<main class="box width_full">
	<section>
		<PageHeader />
	</section>
	<section>
		<PackageDetail pkg={orc_pkg} />
	</section>
	<section>
		<LibraryFooter pkg={orc_pkg} emoji="🪄" root_url="https://www.ryanatkn.com/">
			<PageFooter />
		</LibraryFooter>
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
