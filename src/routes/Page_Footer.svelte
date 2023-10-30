<script lang="ts">
	import Breadcrumb from '@fuz.dev/fuz_library/Breadcrumb.svelte';
	import LibraryFooter from '@fuz.dev/fuz_library/LibraryFooter.svelte';
	import type {PackageMeta} from '@fuz.dev/fuz_library/package_meta.js';

	export let pkg: PackageMeta | {url: string; package_json: null};
</script>

<footer>
	{#if pkg.package_json}
		<LibraryFooter {pkg} root_url="https://www.spiderspace.org/" />
	{/if}
	<slot />
	<div class="breadcrumb_wrapper">
		<Breadcrumb>🪄</Breadcrumb>
	</div>
</footer>

<style>
	footer {
		margin: var(--spacing_3) 0;
	}
	.breadcrumb_wrapper {
		font-size: var(--size_lg);
		margin-top: var(--spacing_3);
	}
</style>
