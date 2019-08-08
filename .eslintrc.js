module.exports = {
  root: true,
  env: {
    node: true
  },
  globals: {
    _: 'readonly'
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  rules: {
    'quotes': ['warn', 'single', { avoidEscape: true }],
    'semi': ['error', 'always'],
    'comma-dangle': ['error', 'never'],
    'quote-props': ['warn', 'consistent-as-needed'],
    'max-len': ['warn', 120],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-param-reassign': 'error',
    'prefer-destructuring': 'warn',
    'vue/component-name-in-template-casing': ['warn', 'PascalCase']
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
