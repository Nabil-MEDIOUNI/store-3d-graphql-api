module.exports = {
  env: {
    node: true,
    jest: true,
  },
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  rules: {
    /* ******************************* FORMATTING ******************************* */
    indent: 0,
    'react/destructuring-assignment': 0,
    'react/no-did-mount-set-state': 0,
    'linebreak-style': 0,
    'operator-linebreak': 0,
    'max-len': 0,
    'object-curly-spacing': 0,
    'object-curly-newline': 0,
    'implicit-arrow-linebreak': 0,
    'function-paren-newline': 0,
    'no-console': 0,
    'no-alert': 0,
    'no-shadow': 0,
    semi: 0,
    quotes: [2, 'single', { avoidEscape: true }],
    /* ******************************* JAVASCRIPT ******************************* */
    camelcase: 'warn',
    'arrow-parens': ['warn', 'always'],
    'arrow-body-style': 'off',
    'no-underscore-dangle': 'off',
    'no-param-reassign': 0,
    'no-unused-vars': 'error',
    'class-methods-use-this': 'warn',
    'prefer-destructuring': 'warn',
    'prefer-const': 'warn',
    'no-empty': 'warn',
    'import/prefer-default-export': 'off',
    'import/no-cycle': 'warn',
    'no-nested-ternary': 0,
  },
};
