import pluginJs from '@eslint/js'
import pluginReact from 'eslint-plugin-react'
import globals from 'globals'
import tseslint from 'typescript-eslint'

/** @type {import('eslint').Linter.Config[]} */
export default [
	{ files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
	{ languageOptions: { globals: globals.browser } },

	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	{
		rules: {
			'@typescript-eslint/explicit-function-return-type': 'error',
			'react/react-in-jsx-scope': 'off',
			'no-console': 'error',
			'no-label-var': 'error',
			'no-multi-str': 'error',
			'no-negated-condition': 'error',
			'no-nested-ternary': 'error',
			'no-unneeded-ternary': 'error',
			'no-var': 'error'
		}
	}
]
