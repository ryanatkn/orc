declare module '$lib/packages.json' {
	import type {FetchedPackage} from '$lib/fetch_packages.js';
	const data: FetchedPackage[];
	export default data;
}
