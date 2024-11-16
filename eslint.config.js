import prettier from 'eslint-config-prettier';
import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import ts from 'typescript-eslint';
import svelteParser from 'svelte-eslint-parser';
import svelteConfig from './svelte.config.js';

export default ts.config(
	js.configs.recommended,
	...ts.configs.recommended,
	...svelte.configs['flat/recommended'],
	prettier,
	...svelte.configs['flat/prettier'],
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
	},
	{
		files: ['**/*.svelte', '*.svelte', '**/*.ts'],
		languageOptions: {
			parser: svelteParser,
			parserOptions: {
				parser: ts.parser,
				svelteConfig: svelteConfig,
				svelteFeatures: {
					runes: true,
					experimentalGenerics: true,
				},
			},
		},
	},
	{
		rules: {
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
					caughtErrorsIgnorePattern: '^_',
				},
			],
			'svelte/no-inspect': 'error',
			'svelte/no-svelte-internal': 'error',
		},
	},
	{
		ignores: [
			'.DS_Store',
			'node_modules',
			'build/',
			'.svelte-kit/',
			'dist/',
			'.env',
			'.env.*',
			'!.env.example',
			'src/lib/wasm/',
			'package-lock.json',
		],
	},
);
