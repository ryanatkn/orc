<script lang="ts">
	import {parse_package_meta} from '@fuz.dev/fuz_library/package_meta.js';

	import packages from '$lib/packages.json';
	import Page_Header from '$routes/Page_Header.svelte';
	import type {Fetched_Package_Meta} from '$lib/fetch_packages.js';
	import Repo_Table from '$lib/Repo_Table.svelte';
	import Page_Footer from '$routes/Page_Footer.svelte';
	import {package_json} from '$lib/package.js';

	// TODO hacky, weird names
	const pkgs: Fetched_Package_Meta[] = packages.map(({url, package_json, pull_requests}) =>
		package_json
			? {...parse_package_meta(url, package_json), pull_requests}
			: {url, package_json: null, pull_requests: null},
	);

	console.log(`pkgs`, pkgs);

	// TODO hacky - maybe put in context?
	const pkg = parse_package_meta(package_json.homepage, package_json);
</script>

<svelte:head>
	<title>table {package_json.icon} @ryanatkn/orc</title>
</svelte:head>

<main class="box">
	<section>
		<Page_Header />
	</section>
	<section>
		<div class="panel padded_md">
			<Repo_Table {pkgs} />
		</div>
	</section>
	<section class="box">
		<Page_Footer {pkg} />
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
