import {paths, Url} from '@grogarden/gro/paths.js';
import {join} from 'node:path';
import {z} from 'zod';

export const Orc_Config = z
	.object({
		packages: z.array(Url),
	})
	.strict();
export type Orc_Config = z.infer<typeof Orc_Config>;

export const load_orc_config = async (dir = paths.root): Promise<Orc_Config> => {
	const config = (await import(join(dir, 'orc.config.ts'))).default;
	return Orc_Config.parse(config);
};
