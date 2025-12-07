import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-config-prettier';

export default [
    {
        ignores: ['dist/**', 'build/**'],
    },
    {
        languageOptions: {
            parserOptions: {
                project: './tsconfig.eslint.json',
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
    // Strict, type-aware TS rules
    ...tseslint.configs.strictTypeChecked,

    {
        languageOptions: {
            globals: {
                Bun: 'readonly',
                fetch: 'readonly',
                Request: 'readonly',
                Response: 'readonly',
                Headers: 'readonly',
                WebSocket: 'readonly',
            },
        },

        plugins: {
            import: importPlugin,
        },

        rules: {
            /* ---------- TypeScript correctness ---------- */

            // Effect uses explicit control of effects,
            // so allow promises only where meaningful
            '@typescript-eslint/no-floating-promises': [
                'error',
                {
                    ignoreIIFE: true,
                    ignoreVoid: true,
                },
            ],

            '@typescript-eslint/no-misused-promises': [
                'error',
                {
                    checksVoidReturn: false,
                },
            ],

            '@typescript-eslint/switch-exhaustiveness-check': 'error',

            /* ---------- Imports ---------- */

            'import/no-duplicates': 'error',
            'import/no-cycle': ['warn', { maxDepth: 1 }],
            'import/no-unused-modules': 'error',

            /* ---------- General ---------- */
            'no-console': 'error',
            'no-debugger': 'error',
        },
    },

    prettier,
];
