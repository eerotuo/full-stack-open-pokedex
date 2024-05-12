module.exports = {
  'env': {
    'commonjs': true,
    'es2021': true,
    'node': true
  },
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module' // Set sourceType directly here
  },
  'plugins': [
    '@stylistic/js'
  ],
  'extends': 'eslint:recommended',
  'rules': {
    '@stylistic/js/indent': [
      'error',
      2
    ],
    '@stylistic/js/linebreak-style': [
      'error',
      'unix'
    ],
    '@stylistic/js/quotes': [
      'error',
      'single'
    ],
    '@stylistic/js/semi': [
      'error',
      'never'
    ],
  }
}
