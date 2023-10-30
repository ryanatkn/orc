<script lang="ts">
	import type {PackageMeta} from '@fuz.dev/fuz_library/package_meta.js';
	import type {Package_Module} from '@grogarden/gro/package_json.js';
	import {ensure_end} from '@grogarden/util/string.js';
	import {base} from '$app/paths';

	import Modules_Menu from '$lib/Modules_Menu.svelte';

	export let pkgs: Array<PackageMeta | {url: string; package_json: null}>; // TODO normalized version with cached primitives?

	// TODO extract to Orc

	// TODO add sorting options

	// TODO show other data (bytes and lines of code per module?)

	// TODO pretty hacky, needs helpers or rethinking
	let pkgs_modules: Array<{
		pkg: PackageMeta;
		modules: Package_Module[];
	}>;
	$: pkgs_modules = pkgs.reduce(
		(v, pkg) => {
			if (!pkg.package_json?.modules) return v;
			v.push({pkg, modules: Object.values(pkg.package_json.modules)});
			return v;
		},
		[] as Array<{pkg: PackageMeta; modules: Package_Module[]}>,
	);
</script>

<div class="modules_detail">
	<div class="menu_wrapper">
		<Modules_Menu {pkgs_modules} />
	</div>
	<ul class="width_md">
		{#each pkgs_modules as pkg_modules (pkg_modules)}
			{@const {pkg, modules} = pkg_modules}
			<a href="#{pkg.name}" id={pkg.name} class="subtitle">#</a>
			<ul>
				{#each modules as pkg_module (pkg_module)}
					{@const {path, declarations} = pkg_module}
					<li
						class="module"
						class:ts={path.endsWith('.ts')}
						class:svelte={path.endsWith('.svelte')}
						class:css={path.endsWith('.css')}
						class:json={path.endsWith('.json')}
					>
						<div>
							{#if pkg.repo_url}
								<div class="chip row">
									<a href="{base}/tree/{pkg.repo_name}">{pkg.name}</a>/<a
										href="{ensure_end(pkg.repo_url, '/')}blob/main/src/lib/">{path}</a
									>
								</div>
							{:else}
								<span class="chip"><a href="{base}/tree/{pkg.repo_name}">{pkg.name}</a>/{path}</span
								>
							{/if}
						</div>
						<ul class="declarations">
							{#each declarations as { name, kind }}
								<li
									class="declaration chip"
									class:variable_declaration={kind === 'VariableDeclaration'}
									class:type_declaration={kind === 'InterfaceDeclaration' ||
										kind === 'TypeAliasDeclaration'}
									class:class_declaration={kind === 'ClassDeclaration'}
								>
									{name}
								</li>
							{/each}
						</ul>
					</li>
				{/each}
			</ul>
		{/each}
	</ul>
</div>

<!-- TODO better rendering, also show author, etc -->

<style>
	.modules_detail {
		position: relative;
		padding: var(--spacing_lg);
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		width: 100%;
		gap: var(--spacing_1);
	}
	.subtitle {
		height: 0;
		position: relative;
		left: calc(-1 * var(--spacing_lg));
		top: 0;
	}
	.module {
		margin-bottom: var(--spacing_xs);
		--link_color: var(--text_2);
	}
	.ts {
		--link_color: var(--color_1);
	}
	.svelte {
		--link_color: var(--color_4);
	}
	.css {
		--link_color: var(--color_2);
	}
	.json {
		--link_color: var(--color_6);
	}
	/* TODO extract */
	.declarations {
		display: flex;
		flex: 1;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: flex-start;
		gap: var(--spacing_xs);
		padding-left: var(--spacing_xs);
	}
	.declaration {
		font-family: var(--font_family_mono);
		font-size: var(--size_sm);
	}
	.variable_declaration {
		color: var(--color_3);
	}
	.type_declaration {
		color: var(--color_7);
	}
	.class_declaration {
		color: var(--color_6);
	}
	/* TODO extract  */
	.menu_wrapper {
		position: sticky;
		top: var(--spacing_1);
		display: flex;
	}
</style>
