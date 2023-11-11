import type {Orc_Config} from '$lib/config.js';

const config: Orc_Config = {
	deployments: [
		'https://www.fuz.dev/',
		'https://library.fuz.dev/',
		'https://template.fuz.dev/',
		'https://www.grogarden.org/',
		// TODO cache 404s
		'https://missing.fuz.dev/',
		'https://www.spiderspace.org/',
	],
};

export default config;
