import {paths, Url} from '@grogarden/gro/paths.js';
import {join} from 'node:path';
import {z} from 'zod';

export const OrcConfig = z.object({
	packages: z.array(Url),
});
export type OrcConfig = z.infer<typeof OrcConfig>;

// TODO refactor for reusability
export const load_orc_config = async (dir = paths.root): Promise<OrcConfig> =>
	(await import(join(dir, 'orc.config.ts'))).default;
