import {exists} from '@grogarden/gro/exists.js';
import {task as base_task} from '@grogarden/gro/sync.task.js';
import {cp} from 'fs/promises';

// TODO refactor - upstream to gro? see also @feltjs/felt
const init_env = async (): Promise<void> => {
	const path = '.env';
	const example_path = '.env.example'; // TODO check .production and .development too
	if (!(await exists(path))) {
		await cp(example_path, path);
	}
};

export const task: typeof base_task = {
	...base_task,
	run: async ({invoke_task, args}) => {
		await init_env();
		await invoke_task('gro/sync', args);
	},
};
