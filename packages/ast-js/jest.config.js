module.exports = {
	preset: 'ts-jest/presets/js-with-babel',
	globals: {
		'ts-jest': {
			tsConfig: './tsconfig.json',
			babel: {
				
			}
		},
	},
	transformIgnorePatterns: ['node_modules/(?!(@syntactic)/)'],
};
