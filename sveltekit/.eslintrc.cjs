module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:prettier/recommended',
		'plugin:svelte/recommended',
	],
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
		},
	],
	plugins: ['prettier'],
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
