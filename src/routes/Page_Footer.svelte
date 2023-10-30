<script lang="ts">
	import Breadcrumb from '@fuz.dev/fuz_library/Breadcrumb.svelte';
	import LibraryFooter from '@fuz.dev/fuz_library/LibraryFooter.svelte';
	import type {PackageMeta} from '@fuz.dev/fuz_library/package_meta.js';

	export let pkg: PackageMeta | {url: string; package_json: null};
</script>

<footer class="page_footer">
	{#if pkg.package_json}
		<LibraryFooter {pkg} root_url="https://www.spiderspace.org/" />
	{/if}
	<slot />
	<Breadcrumb>🪄</Breadcrumb>
</footer>

<style>
	.page_footer {
		margin: var(--spacing_3) 0 var(--spacing_1);
		font-size: var(--size_lg);
	}
</style>
