module.exports = {
  root: true,

  env: {
    node: true
  },

  globals: {
    _: 'readonly'
  },

  rules: {
    'quotes': ['warn', 'single'],
    'semi': ['error', 'always'],
    'comma-dangle': ['error', 'never'],
    'quote-props': ['warn', 'consistent-as-needed'],
    'max-len': ['warn', 120],
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-param-reassign': 'error',
    'prefer-destructuring': 'warn',
    'vue/component-name-in-template-casing': ['warn', 'PascalCase'],
    'vue/attribute-hyphenation': 'warn',
    'vue/html-closing-bracket-newline': 'warn',
    'vue/html-closing-bracket-spacing': 'warn',
    'vue/html-end-tags': 'warn',
    'vue/html-indent': 'warn',
    'vue/html-quotes': 'warn',
    'vue/html-self-closing': ['warn', { html: { void: 'always' } } ],
    'vue/max-attributes-per-line': ['warn', { singleline: 3, multiline: { max: 1, allowFirstLine: true } }],
    'vue/multiline-html-element-content-newline': 'warn',
    'vue/mustache-interpolation-spacing': 'warn',
    'vue/name-property-casing': 'warn',
    'vue/no-multi-spaces': 'warn',
    'vue/no-spaces-around-equal-signs-in-attribute': 'warn',
    'vue/no-template-shadow': 'warn',
    'vue/prop-name-casing': 'warn',
    'vue/require-default-prop': 'warn',
    'vue/require-prop-types': 'warn',
    'vue/singleline-html-element-content-newline': 'warn',
    'vue/v-bind-style': 'warn',
    'vue/v-on-style': 'warn',
    'vue/camelcase': 'warn',
    'vue/comma-dangle': ['error', 'never'],
    'vue/match-component-file-name': 'error'
  },

  parserOptions: {
    parser: 'babel-eslint'
  },

  extends: ['plugin:vue/recommended', 'eslint:recommended']
};
