module.exports = {
	preset: 'ts-jest/presets/js-with-babel',
	projects: ['<rootDir>/packages/*/jest.config.js'],
	globals: {
		'ts-jest': {
			tsConfig: './tsconfig.json',
		},
	},
	transformIgnorePatterns: ['node_modules/(?!(@syntactic)/)'],
};
