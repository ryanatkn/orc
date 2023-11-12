<script lang="ts">
	import Modules_Page from '$lib/Modules_Page.svelte';
	import {get_packages} from '$lib/packages.js';

	// TODO BLOCK should we use context for `_Page` components?
	const {pkg, pkgs} = get_packages();
</script>

<Modules_Page {pkg} {pkgs} />
