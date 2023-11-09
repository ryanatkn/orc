<script lang="ts">
	import type {Package_Meta} from '@fuz.dev/fuz_library/package_meta.js';
	import type {Package_Module} from '@grogarden/gro/package_json.js';
	import {ensure_end} from '@grogarden/util/string.js';
	import {base} from '$app/paths';

	import Modules_Menu from '$lib/Modules_Menu.svelte';

	export let pkgs: Array<Package_Meta | {url: string; package_json: null}>; // TODO normalized version with cached primitives?

	// TODO extract to Orc

	// TODO add sorting options

	// TODO show other data (bytes and lines of code per module?)

	// TODO hacky, needs helpers or rethinking
	let pkgs_modules: Array<{
		pkg: Package_Meta;
		modules: Package_Module[];
	}>;
	$: pkgs_modules = pkgs.reduce(
		(v, pkg) => {
			const {package_json} = pkg;
			if (
				!package_json?.modules ||
				!(
					!!package_json.devDependencies?.['@sveltejs/package'] ||
					!!package_json.dependencies?.['@sveltejs/package']
				)
			) {
				return v;
			}
			v.push({pkg, modules: Object.values(package_json.modules)});
			return v;
		},
		[] as Array<{pkg: Package_Meta; modules: Package_Module[]}>,
	);

	// TODO add favicon (from library? gro?)
</script>

<div class="modules_detail">
	<div class="nav">
		<Modules_Menu {pkgs_modules} />
		<slot name="nav" />
	</div>
	<ul class="width_md box">
		{#each pkgs_modules as pkg_modules (pkg_modules)}
			{@const {pkg, modules} = pkg_modules}
			<li class="pkg_module">
				<header class="width_full relative">
					<a href="#{pkg.name}" id={pkg.name} class="subtitle">🔗</a>
					<a href="{base}/tree/{pkg.repo_name}">{pkg.name}</a>
				</header>
				<ul class="modules panel">
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
										<a href="{ensure_end(pkg.repo_url, '/')}blob/main/src/lib/{path}">{path}</a>
									</div>
								{:else}
									<span class="chip">{path}</span>
								{/if}
							</div>
							<ul class="declarations">
								{#each declarations as { name, kind }}
									<li class="declaration chip {kind}_declaration">
										{name}
									</li>
								{/each}
							</ul>
						</li>
					{/each}
				</ul>
			</li>
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
		position: absolute;
		right: 0;
		top: 0;
		text-align: right;
	}
	.pkg_module {
		width: 100%;
		display: flex;
		flex-direction: column;
		margin-bottom: var(--spacing_5);
	}
	.pkg_module > header {
		display: flex;
		padding: var(--spacing_xs) var(--spacing_md);
		font-size: var(--size_lg);
		position: sticky;
		top: 0;
		background-color: var(--bg);
	}
	.modules {
		/* TODO delete? */
		padding: var(--spacing_sm);
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
	.function_declaration {
		color: var(--color_5);
	}
	.type_declaration {
		color: var(--color_7);
	}
	.class_declaration {
		color: var(--color_6);
	}
	/* TODO extract  */
	.nav {
		position: sticky;
		top: var(--spacing_1);
		display: flex;
		flex-direction: column;
	}
</style>
