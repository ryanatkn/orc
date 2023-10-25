import type {Url} from '@grogarden/gro/paths.js';

export interface OrcConfig {
	// TODO name? `packages`? `package_urls`?
	repos: Url[];
}

// TODO refactor for reusability
export const load_orc_config = async (): Promise<OrcConfig> =>
	(await import('./orc.config.js')).default;
