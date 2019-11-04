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
    overrides: [
        {
            files: ['*.tsx'],
            rules: {
                '@typescript-eslint/no-unused-vars': 'off'
            }
        }
    ]
}
