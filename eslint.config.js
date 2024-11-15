/** @type {import('eslint').Linter.Config} */
const react = require('@rocketseat/eslint-config/react')
module.exports = {
  extends: ['@rocketseat/eslint-config/react'],
  plugins: ['simple-import-sort',react],
  rules: {
    'simple-import-sort/imports': 'error',
    react
  },
}