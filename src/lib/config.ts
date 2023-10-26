import {paths, type Url} from '@grogarden/gro/paths.js';
import {join} from 'node:path';

export interface OrcConfig {
	// TODO name? `packages`? `package_urls`?
	repos: Url[];
}

// TODO refactor for reusability
export const load_orc_config = async (dir = paths.root): Promise<OrcConfig> =>
	(await import(join(dir, 'orc.config.ts'))).default;
