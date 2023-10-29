declare module '$lib/packages.json' {
	import type {Maybe_Fetched_Package} from '$lib/fetch_packages.js';
	const data: Maybe_Fetched_Package[];
	export default data;
}
