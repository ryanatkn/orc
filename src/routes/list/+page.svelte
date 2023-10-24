<script lang="ts">
	import PackageSummary from '@fuz.dev/fuz_library/PackageSummary.svelte';
	import LibraryFooter from '@fuz.dev/fuz_library/LibraryFooter.svelte';
	import {parse_package_meta, type PackageMeta} from '@fuz.dev/fuz_library/package_meta.js';
	import {strip_end, strip_start} from '@grogarden/util/string.js';

	import packages from '$lib/packages.json';
	import PageHeader from '$routes/PageHeader.svelte';
	import PageFooter from '$routes/PageFooter.svelte';

	// TODO hacky
	const pkgs = packages.map(({url, package_json}) =>
		package_json ? parse_package_meta(url, package_json) : {url, package_json: null},
	);

	// TODO hacky
	const orc_pkg = pkgs.find((p) => p.url === 'https://orc.ryanatkn.com/') as PackageMeta;
</script>

<main class="box width_full">
	<section>
		<PageHeader />
	</section>
	<section>
		<menu>
			<!-- TODO PackageSummary -->
			{#each pkgs as pkg}
				<li class="panel padded_md box">
					{#if pkg.package_json}
						<PackageSummary {pkg} />
					{:else}
						<div class="prose width_sm">
							<p>
								failed to fetch <code>.well-known/package.json</code> from
								<a href={pkg.url}>{strip_end(strip_start(pkg.url, 'https://'), '/')}</a>
							</p>
						</div>
					{/if}
				</li>
			{/each}
		</menu>
	</section>
	<section>
		<LibraryFooter pkg={orc_pkg} emoji="🪄" root_url="https://www.ryanatkn.com/">
			<PageFooter />
		</LibraryFooter>
	</section>
</main>

<style>
	main {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
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
	menu {
		gap: var(--spacing_lg);
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: flex-start;
	}
	li {
		margin-bottom: var(--spacing_1);
	}
</style>
