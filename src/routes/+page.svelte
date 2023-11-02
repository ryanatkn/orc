<script lang="ts">
	import Library_Footer from '@fuz.dev/fuz_library/Library_Footer.svelte';
	import Card from '@fuz.dev/fuz_library/Card.svelte';
	import {parse_package_meta} from '@fuz.dev/fuz_library/package_meta.js';
	import {base} from '$app/paths';

	import Main_Header from '$routes/Main_Header.svelte';
	import {package_json} from '$lib/package.js';

	// TODO hacky - maybe put in context?
	const pkg = parse_package_meta(package_json.homepage, package_json);
</script>

<main class="box">
	<section>
		<Main_Header />
	</section>
	<section class="prose">
		<blockquote class="text_align_center">
			for example usage<br />see <a href="https://www.spiderspace.org/">spiderspace.org</a>
		</blockquote>
	</section>
	<section>
		<menu>
			<li>
				<Card href="{base}/table">
					table
					<svelte:fragment slot="icon">{''}</svelte:fragment>
				</Card>
			</li>
			<li>
				<Card href="{base}/modules">
					modules
					<svelte:fragment slot="icon">{''}</svelte:fragment>
				</Card>
			</li>
			<li>
				<Card href="{base}/pulls">
					pulls
					<svelte:fragment slot="icon">{''}</svelte:fragment>
				</Card>
			</li>
			<li>
				<Card href="{base}/tree">
					tree
					<svelte:fragment slot="icon">{''}</svelte:fragment>
				</Card>
			</li>
		</menu>
	</section>
	<section class="box">
		<a class="chip" href="{base}/about">about</a>
	</section>
	<section>
		<Library_Footer {pkg} root_url="https://www.ryanatkn.com/" />
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
