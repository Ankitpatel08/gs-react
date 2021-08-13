// eslint-disable-next-line no-undef
module.exports = {
    env: {
        es6: true,
    },
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
    ],
    rules: {
        strict: ['error', 'global'], // use strict
        'no-var': 'error', // avoid var to declare variable
        'prefer-const': 'error', // use const for variables never reassigned
        'one-var': ['error', 'never'], // use separate statement for each variable
        camelcase: 'error', // camel case for declaring variable
        'no-unused-vars': 'error', // to remove unused variables
        'no-multi-assign': 'error', // avoid multiple assignment in single line
        quotes: ['error', 'single'], // consistent quotes : single, backtick, double
        'no-array-constructor': 'error', // ensure array literals to init array
        'no-new-object': 'error', // ensure object literals to init object 
        'quote-props': ['error', 'as-needed'], // use quote in property only needed
        'no-new-wrappers': 'error', // avoid constuctor for type casting primitive data
        'no-extra-boolean-cast': 'error', // avoid unnecessary boolean type-cast
        eqeqeq: 'error', // ensure === in comparision
        yoda: 'error', // ensure variable first in condition
        'no-unneeded-ternary': 'error', // avoid unnecessary ternary
        'no-nested-ternary': 'error', // avoid nested ternary
        'multiline-comment-style': ['error', 'starred-block'], // Formating of comment block
        'spaced-comment': ['error', 'always'], // space enforced beginning of each comment line
        semi: ['error', 'always'], // force semicolon wherever needed
        'semi-spacing': 'error', // ensure no space before semicolon
        'no-extra-semi': 'error', // ensure no extra semicolon
        'max-len': ['error', { code: 100 }], // max chars in one line of code 
        'comma-style': ['error', 'last'], // enforce comma should place at last
        'comma-dangle': ['error', 'always-multiline'], // enforce comma after last item
        indent: ['error', 4], // indent using 4 space
        'space-infix-ops': 'error', // space around operators
        'brace-style': 'error', // force One true brace style
        'space-before-blocks': 'error', // ensure space before blocks
        'keyword-spacing': 'error', // ensure space before and after keywords 
        'arrow-spacing': 'error', // ensure space before and after arrow in arrow function
        'space-before-function-paren': ['error', {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always',
        }], // space around function parenthesis
        'newline-per-chained-call': 'error', // chained function on new line
        'space-in-parens': ['error', 'never'], // avoid space inside parenthesis
        'array-bracket-spacing': ['error', 'never'], // avoid space inside array braces
        'object-curly-spacing': ['error', 'always'], // space inside object curly
        'comma-spacing': ['error', {
            before: false,
            after: true,
        }], // spacing before/after comma
        'no-multiple-empty-lines': ['error', {
            max: 1,
            maxEOF: 1,
        }], // enforce max number of empty line to 1
    },
};