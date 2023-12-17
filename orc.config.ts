import type {Orc_Config} from '$lib/config.js';

const config: Orc_Config = {
	deployments: [
		'https://orc.ryanatkn.com', // intentionally omitting the trailing slash for testing purposes
		'https://www.fuz.dev/',
		'https://library.fuz.dev/',
		'https://template.fuz.dev/',
		'https://www.grogarden.org/',
		'https://missing.fuz.dev/', // intentionally a 404 for testing purposes
		'https://www.spiderspace.org/',
	],
};

export default config;
