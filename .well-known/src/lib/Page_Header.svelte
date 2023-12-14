<script lang="ts">
	import Breadcrumb from '@fuz.dev/fuz_library/Breadcrumb.svelte';
	import type {Package_Meta} from '@fuz.dev/fuz_library/package_meta.js';

	export let pkg: Package_Meta;
</script>

<div>
	<Breadcrumb>{pkg.package_json.icon}</Breadcrumb>
</div>

<style>
	div {
		font-size: var(--size_1);
	}
</style>
