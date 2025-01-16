import pluginJs from '@eslint/js';
import globals from 'globals';

/** @type {import('eslint').ESLint.FlatConfig[]} */
export default [
  {
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: globals.browser,
    },
    rules: {
      // Стиль Airbnb
      indent: ['error', 2],
      quotes: ['error', 'single', { avoidEscape: true }],
      'linebreak-style': ['error', 'unix'],
      semi: ['error', 'always'],
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'arrow-parens': ['error', 'always'],
      'arrow-spacing': ['error', { before: true, after: true }],
      'object-curly-spacing': ['error', 'always'],
      'space-before-function-paren': ['error', 'never'],
      'max-len': ['error', { code: 100, ignoreComments: true, ignoreUrls: true }],
      'no-console': 'warn',
      'no-debugger': 'error',
      'no-var': 'error',
      'prefer-arrow-callback': ['error', { allowNamedFunctions: false }],
      'prefer-template': 'error',
      'template-curly-spacing': ['error', 'never'],
      'no-mixed-operators': 'error',
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
      eqeqeq: ['error', 'always'],
      'brace-style': ['error', '1tbs', { allowSingleLine: true }],
      'comma-spacing': ['error', { before: false, after: true }],
      'space-infix-ops': 'error',
      'keyword-spacing': ['error', { before: true, after: true }],
      'key-spacing': ['error', { beforeColon: false, afterColon: true }],
      'func-call-spacing': ['error', 'never'],
      'no-trailing-spaces': 'error',
      'no-shadow': ['error', { hoist: 'all' }],
      'no-restricted-syntax': [
        'error',
        {
          selector: 'ForInStatement',
          message: 'for...in loops are not allowed',
        },
        {
          selector: 'WithStatement',
          message: '`with` statements are not allowed',
        },
      ],
      'no-underscore-dangle': ['error', { allowAfterThis: false }],
      'no-duplicate-imports': ['error', { includeExports: true }],
      'no-useless-constructor': 'error',
      'no-useless-return': 'error',
      'class-methods-use-this': ['error', { exceptMethods: [] }],
      'consistent-return': 'error',
      'dot-notation': ['error', { allowKeywords: true }],
      'newline-per-chained-call': ['error', { ignoreChainWithDepth: 4 }],
      'no-new': 'error',
      'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
      'spaced-comment': ['error', 'always', { exceptions: ['-', '+'] }],
      'no-continue': 'error',
      'no-lonely-if': 'error',
      'no-nested-ternary': 'error',
      'no-unneeded-ternary': 'error',
      'nonblock-statement-body-position': ['error', 'beside'],
      'object-curly-newline': [
        'error',
        {
          ObjectExpression: { multiline: true, consistent: true },
          ObjectPattern: { multiline: true, consistent: true },
        },
      ],
      'object-property-newline': ['error', { allowMultiplePropertiesPerLine: true }],
    },
  },
  pluginJs.configs.recommended,
];
