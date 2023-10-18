<script lang="ts">
	import LibraryFooter from '@fuz.dev/fuz_library/LibraryFooter.svelte';
	import {parse_package_meta} from '@fuz.dev/fuz_library/package_meta.js';

	import packages from '$lib/packages.json';
	import Header from '$routes/Header.svelte';

	// TODO hacky
	const url = 'https://orc.ryanatkn.com/';
	const orc_pkg = parse_package_meta(url, packages.find((p) => p.url === url)!.package_json!);
</script>

<main class="box">
	<section>
		<Header />
	</section>
	<section>
		<menu>
			<li><a href="list">list</a></li>
		</menu>
	</section>
	<section>
		<LibraryFooter pkg={orc_pkg} />
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
	menu {
		gap: var(--spacing_lg);
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
		font-size: var(--size_3);
	}
	li {
		margin-bottom: var(--spacing_1);
	}
</style>
