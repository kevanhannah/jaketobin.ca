module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ['eslint:recommended', 'plugin:prettier/recommended'],
	overrides: [
		{
			files: ['*.svelte'],
			processor: 'svelte3/svelte3',
		},
	],
	plugins: ['svelte3', 'prettier'],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	root: true,
	rules: {
		indent: ['error', 'tab', { SwitchCase: 1 }],
		'no-tabs': ['error', { allowIndentationTabs: true }],
		semi: 'error',
	},
};
