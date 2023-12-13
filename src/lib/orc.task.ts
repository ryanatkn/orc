import type {Task} from '@grogarden/gro';
import {z} from 'zod';

export const Args = z.object({}).strict();
export type Args = z.infer<typeof Args>;

export const task: Task<Args> = {
	Args,
	summary: 'upgrade and update deployments',
	run: async ({invoke_task}) => {
		await invoke_task('upgrade');
		await invoke_task('deployments');
		await invoke_task('sync');
		// TODO probably support an optional message,
		// and then `gro changeset` (if there are any!)
		// and then `git commit` and `git push`
	},
};
