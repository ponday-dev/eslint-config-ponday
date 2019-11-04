'use strict';

module.exports = {
    extends: [
        "eslint:recommended"
    ],
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
    },
    env: {
        browser: true,
        es6: true,
        node: true,
    }
};
