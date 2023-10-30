<script lang="ts">
	import PackageDetail from '@fuz.dev/fuz_library/PackageDetail.svelte';
	import {parse_package_meta} from '@fuz.dev/fuz_library/package_meta.js';
	import LibraryFooter from '@fuz.dev/fuz_library/LibraryFooter.svelte';

	import Page_Footer from '$routes/Page_Footer.svelte';
	import {package_json} from '$lib/package.js';

	// TODO hacky - maybe put in context?
	const pkg = parse_package_meta(package_json.homepage, package_json);
</script>

<main class="width_md">
	<div class="prose">
		<section>
			<header>
				<h1>
					orc<small><a class="box" href="https://github.com/ryanatkn/orc">🪄</a></small>
				</h1>
			</header>
		</section>
	</div>
	<section class="box width_full spaced">
		<div class="panel padded_md width_md">
			<PackageDetail {pkg} />
		</div>
	</section>
	<div class="box">
		<LibraryFooter {pkg} />
		<Page_Footer />
	</div>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
	}
	h1 {
		display: flex;
		align-items: baseline;
		text-align: center;
	}
</style>
