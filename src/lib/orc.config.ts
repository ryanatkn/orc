import type {OrcConfig} from '$lib/config';

const config: OrcConfig = {
	repos: [
		// fuz
		'https://www.fuz.dev/',
		'https://template.fuz.dev/',
		'https://library.fuz.dev/',
		'https://contextmenu.fuz.dev/',
		'https://dialog.fuz.dev/',
		'https://code.fuz.dev/',
		'https://intersect.fuz.dev/',
		// felt
		// TODO feltjs/felt repo? this is just feltjs/website --
		// figuring this out this will clarify the deployment vs repo/package conceptual problem
		'https://www.felt.dev/',
		'https://ui.felt.dev/',
		'https://mural.felt.dev/',
		'https://habitat.felt.dev/',
		// gro
		'https://www.grogarden.org/',
		'https://util.grogarden.org/',
		// ryanatkn
		'https://www.ryanatkn.com/',
		'https://log.ryanatkn.com/',
		// TODO this is being locally resolved
		// 'https://orc.ryanatkn.com/',
		'https://www.cosmicplayground.org/',
		'https://sss.ryanatkn.com/',
		'https://earbetter.ryanatkn.com/',
	],
};

export default config;
