module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'standard',
    'plugin:jest/recommended',
    'plugin:react/recommended',
    'prettier',
    'prettier/standard',
    'prettier/react',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-var': 1,
    'prefer-const': 1,
    'no-console': process.env.NODE_ENV !== 'development' ? 1 : 0,
    'no-debugger': process.env.NODE_ENV !== 'development' ? 1 : 0,
    eqeqeq: 0,
  },
}
