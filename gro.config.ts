import type {CreateGroConfig} from '@grogarden/gro';

const config: CreateGroConfig = async (cfg) => {
	// TODO this shouldn't be necessary, or should be easier
	cfg.map_package_json = (pkg) => {
		pkg.exports = Object.fromEntries(
			Object.entries(pkg.exports!)
				.map(([key, value]) => {
					if (key === './packages.json' || key === './packages.json.d.ts') {
						return null!;
					}
					return [key, value];
				})
				.filter(Boolean),
		);
		return pkg;
	};

	return cfg;
};

export default config;
