<script lang="ts">
	import {page} from '$app/stores';
	import Library_Panel from '@fuz.dev/fuz_library/Library_Panel.svelte';

	import type {Package_Meta} from '@fuz.dev/fuz_library/package_meta.js';
	import type {Src_Module} from '@grogarden/gro/src_json.js';

	// TODO add highlighting of the items that are onscreen

	// LibraryMenu floats alongside the docs, showing scrolled item as active
	export let pkgs_modules: Array<{
		pkg: Package_Meta;
		modules: Src_Module[];
	}>;

	// TODO add favicon (from library? gro?)
</script>

<Library_Panel>
	<div class="library_menu">
		<h6>deployments</h6>
		<menu>
			{#each pkgs_modules as pkg_modules (pkg_modules)}
				<li role="none">
					<a href="#{pkg_modules.pkg.name}" class:selected={pkg_modules.pkg.name === $page.url.hash}
						>{pkg_modules.pkg.name}</a
					>
				</li>
			{/each}
		</menu>
	</div>
</Library_Panel>

<style>
	.library_menu,
	menu {
		width: 100%;
	}
	h6 {
		padding-bottom: var(--spacing_sm);
	}
	h6:not(:first-child) {
		margin-top: var(--spacing_1);
	}
</style>
