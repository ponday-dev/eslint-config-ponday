'use strict';

module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json'
    },
    plugins: [
        '@typescript-eslint'
    ],
    extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
    ],
    rules: {
        '@typescript-eslint/explicit-function-return-type': [
            'error',
            {
                'allowExpressions': true,
                'allowTypedFunctionExpressions': true
            }
        ],
        '@typescript-eslint/no-explicit-any': 'warn',
    },
    overrides: [
        {
            files: ['*.tsx'],
            rules: {
                '@typescript-eslint/no-unused-vars': 'off'
            }
        }
    ]
}
