<script lang="ts">
	import '@fuz.dev/fuz/style.css';
	import '@fuz.dev/fuz/theme.css';
	import '$routes/style.css';

	import Themed from '@fuz.dev/fuz/Themed.svelte';
	import Dialog from '@fuz.dev/fuz_dialog/Dialog.svelte';
	import Contextmenu from '@fuz.dev/fuz_contextmenu/Contextmenu.svelte';
	import {create_contextmenu} from '@fuz.dev/fuz_contextmenu/contextmenu.js';
	import {parse_package_meta} from '@fuz.dev/fuz_library/package_meta.js';

	import Settings from '$routes/Settings.svelte';
	import type {Fetched_Package, Unfetched_Package} from '$lib/fetch_packages.js';
	import packages from '$lib/packages.json';
	import {set_packages} from '$lib/packages.js';

	const contextmenu = create_contextmenu();

	// TODO BLOCK helper to init these

	const pkgs: Fetched_Package[] = packages
		.map(({url, package_json, src_json, pull_requests}) =>
			package_json && src_json
				? {...parse_package_meta(url, package_json, src_json), pull_requests}
				: null!,
		)
		.filter(Boolean);

	const pkg = pkgs[0];

	const unfetched_pkgs: Unfetched_Package[] = packages
		.map(({url, package_json, src_json}) =>
			package_json && src_json
				? null!
				: {url, package_json: null, src_json: null, pull_requests: null},
		)
		.filter(Boolean);

	// TODO BLOCK name?
	set_packages({pkgs, pkg, unfetched_pkgs});

	let show_settings = false;
</script>

<svelte:head>
	<title>@ryanatkn/orc</title>
</svelte:head>

<svelte:body
	use:contextmenu.action={[
		{
			content: 'Settings',
			icon: '?',
			run: () => {
				show_settings = true;
			},
		},
		{
			content: 'Reload',
			icon: '⟳',
			run: () => {
				location.reload();
			},
		},
	]}
/>

<Themed>
	<slot />
	<Contextmenu {contextmenu} />
	{#if show_settings}
		<Dialog on:close={() => (show_settings = false)}>
			<div class="pane">
				<Settings />
			</div>
		</Dialog>
	{/if}
</Themed>
