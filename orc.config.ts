import type {Orc_Config} from '$lib/config.js';

const config: Orc_Config = {
	packages: [
		'https://www.felt.dev/',
		'https://www.fuz.dev/',
		'https://library.fuz.dev/',
		'https://template.fuz.dev/',
		'https://www.grogarden.org/',
		'https://missing.fuz.dev/',
		'https://www.spiderspace.org/',
	],
	// TODO BLOCK
	filter_pull_request: (pull) => pull.user.login === 'ryanatkn',
};

export default config;
