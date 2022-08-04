module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  rules: {
    '@typescript-eslint/unified-signatures': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'react/no-array-index-key': 'off',
    '@typescript-eslint/consistent-type-imports': 'off',
    '@typescript-eslint/no-shadow': 'off',
  },
  parserOptions: {
    project: './packages/element/tsconfig.json',
  },
};
