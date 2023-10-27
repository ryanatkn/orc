<script lang="ts">
	import LibraryFooter from '@fuz.dev/fuz_library/LibraryFooter.svelte';
	import {parse_package_meta, type PackageMeta} from '@fuz.dev/fuz_library/package_meta.js';

	import packages from '$lib/packages.json';
	import PageHeader from '$routes/PageHeader.svelte';
	import type {FetchedPackageMeta} from '$lib/fetch_packages.js';
	import RepoTable from '$lib/RepoTable.svelte';
	import PageFooter from '$routes/PageFooter.svelte';

	// TODO hacky, weird names
	const pkgs: FetchedPackageMeta[] = packages.map(({url, package_json, pulls}) =>
		package_json
			? {...parse_package_meta(url, package_json), pulls}
			: {url, package_json: null, pulls: null},
	);

	// TODO hacky
	const orc_pkg = pkgs.find((p) => p.url === 'https://orc.ryanatkn.com/') as PackageMeta;
</script>

<main class="box">
	<section>
		<PageHeader />
	</section>
	<section>
		<div class="panel padded_md">
			<RepoTable {pkgs} />
		</div>
	</section>
	<section class="box">
		<LibraryFooter pkg={orc_pkg} root_url="https://www.ryanatkn.com/" />
		<PageFooter />
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
