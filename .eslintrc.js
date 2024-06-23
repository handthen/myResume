module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  overrides: [
    // {
    //     "files": [ "*.js"],
    //     "parser": '@typescript-eslint/parser',
    //     "plugins": ['@typescript-eslint'],
    //     "extends": ['plugin:@typescript-eslint/recommended'],
    //     "rules": {
    //         "@typescript-eslint/no-unused-vars": 0,
    //         "@typescript-eslint/ban-ts-comment": 0,
    //         "@typescript-eslint/no-explicit-any": 0,
    //         '@typescript-eslint/no-var-requires': 0,
    //     }
    // },
  ],
  rules: {
    'prefer-const': 1,
    'no-console': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-undef': 0,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-inferrable-types': 0,
    '@typescript-eslint/ban-types': 0,
    'react/prop-types': [2, { ignore: ['children'] }],
    'react/display-name': 0,
  },
};
