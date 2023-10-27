import {paths, Url} from '@grogarden/gro/paths.js';
import {join} from 'node:path';
import {z} from 'zod';

export const OrcConfig = z
	.object({
		packages: z.array(Url),
	})
	.strict();
export type OrcConfig = z.infer<typeof OrcConfig>;

export const load_orc_config = async (dir = paths.root): Promise<OrcConfig> => {
	const config = (await import(join(dir, 'orc.config.ts'))).default;
	return OrcConfig.parse(config);
};
