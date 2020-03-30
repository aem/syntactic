module.exports = {
	preset: 'ts-jest/presets/js-with-babel',
	globals: {
		'ts-jest': {
			tsConfig: './tsconfig.json',
		},
	},
	transformIgnorePatterns: ['node_modules/(?!(@syntactic)/)'],
};
