'use strict';

module.exports = {
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        }
    },
    settings: {
        react: {
            version: 'detect',
        }
    },
    plugins: [
        'react',
        'react-hooks',
        'jsx-a11y'
    ]
}
