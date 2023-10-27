declare module '$lib/packages.json' {
	import type {MaybeFetchedPackage} from '$lib/fetch_packages.js';
	const data: MaybeFetchedPackage[];
	export default data;
}
