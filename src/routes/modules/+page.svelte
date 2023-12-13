<script lang="ts">
	import Breadcrumb from '@fuz.dev/fuz_library/Breadcrumb.svelte';

	import Page_Header from '$routes/Page_Header.svelte';
	import Page_Footer from '$routes/Page_Footer.svelte';
	import Modules_Detail from '$lib/Modules_Detail.svelte';
	import {package_json} from '$routes/package.js';
	import {get_deployments} from '$lib/deployments.js';

	const {deployment, deployments} = get_deployments();
</script>

<svelte:head>
	<title>modules {package_json.icon} {package_json.name}</title>
</svelte:head>

<main class="box width_full">
	<section>
		<Page_Header pkg={deployment} />
	</section>
	<section>
		<Modules_Detail pkgs={deployments}>
			<div slot="nav" class="row">
				<Breadcrumb>{package_json.icon}</Breadcrumb>
			</div>
		</Modules_Detail>
	</section>
	<section class="box">
		<Page_Footer pkg={deployment} />
	</section>
</main>

<style>
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
</style>
