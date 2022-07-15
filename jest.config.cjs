/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
	globals: {
		'ts-jest': {
			//... // your other configurations here
			useESM: true,
		},
	},
	extensionsToTreatAsEsm: ['.ts'],
	preset: 'ts-jest',
	transform: {
		'^.+\\.[t|j]s$': 'babel-jest',
		'^.+\\.vue$': '@vue/vue3-jest',
	},
	moduleFileExtensions: ['js', 'ts', 'vue'],
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
	},
	testEnvironment: 'jsdom',
	testEnvironmentOptions: {
		customExportConditions: ['node', 'node-addons'],
	},
	resetMocks: true,
}
