import {paths, Url} from '@grogarden/gro/paths.js';
import type {Logger} from '@grogarden/util/log.js';
import {join} from 'node:path';
import {z} from 'zod';

export const Orc_Config = z
	.object({
		deployments: z.array(Url),
	})
	.strict();
export type Orc_Config = z.infer<typeof Orc_Config>;

export const load_orc_config = async (log?: Logger, dir = paths.root): Promise<Orc_Config> => {
	const config = (await import(join(dir, 'orc.config.ts'))).default;
	try {
		return Orc_Config.parse(config);
	} catch (err) {
		try {
			log?.error('invalid orc.config.ts: ' + JSON.parse(err.message)[0].message);
		} catch (err) {}
		throw err;
	}
};
