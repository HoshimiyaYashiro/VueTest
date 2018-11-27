module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'eol-last': 'off',
    'linebreak-style': ['error', 'windows'],
    'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
    'func-names': ['error', 'never'],
    'space-before-function-paren': ['error', 'never'],
    'no-tabs': ['error', { allowIndentationTabs: true }],
    'no-unused-vars': ['error', { args: 'none' }],
    'comma-dangle': [1, 'only-multiline']
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
