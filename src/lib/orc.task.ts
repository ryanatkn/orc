import type {Task} from '@grogarden/gro';
import {z} from 'zod';

export const Args = z.object({}).strict();
export type Args = z.infer<typeof Args>;

/**
 * This is a task not a `.gen.` file because it makes network calls.
 */
export const task: Task<Args> = {
	Args,
	summary: 'upgrade and update packages',
	run: async ({invoke_task}) => {
		await invoke_task('upgrade');
		await invoke_task('packages');
	},
};
