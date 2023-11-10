<script lang="ts">
	import Breadcrumb from '@fuz.dev/fuz_library/Breadcrumb.svelte';

	import {package_json} from '$lib/package.js';
</script>

<div>
	<Breadcrumb>{package_json.icon}</Breadcrumb>
</div>

<style>
	div {
		font-size: var(--size_1);
	}
</style>
