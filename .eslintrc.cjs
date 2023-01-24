module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true,
  },
  parser: 'vue-eslint-parser',
  plugins: ['vue', '@typescript-eslint'],
  ignorePatterns: ['*.cjs'],
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: '2021',
    parser: '@typescript-eslint/parser',
  },
  rules: {
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/no-non-null-assertion': ['off'],
    'no-undef': 'off',
  },
}
