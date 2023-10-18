<script lang="ts">
	import LibraryFooter from '@fuz.dev/fuz_library/LibraryFooter.svelte';
	import Card from '@fuz.dev/fuz_library/Card.svelte';
	import {parse_package_meta} from '@fuz.dev/fuz_library/package_meta.js';

	import packages from '$lib/packages.json';
	import MainHeader from '$routes/MainHeader.svelte';

	// TODO hacky - maybe put in context?
	const url = 'https://orc.ryanatkn.com/';
	const orc_pkg = parse_package_meta(url, packages.find((p) => p.url === url)!.package_json!);
</script>

<main class="box">
	<section>
		<MainHeader />
	</section>
	<section>
		<menu>
			<li>
				<Card href="table">
					table
					<svelte:fragment slot="icon">{''}</svelte:fragment>
				</Card>
			</li>
			<li>
				<Card href="list">
					list
					<svelte:fragment slot="icon">{''}</svelte:fragment>
				</Card>
			</li>
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
		align-items: center;
		font-size: var(--size_3);
	}
	li {
		margin-bottom: var(--spacing_1);
	}
</style>
