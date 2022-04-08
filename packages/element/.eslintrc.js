module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  rules: {
    '@typescript-eslint/unified-signatures': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
  },
  parserOptions: {
    project: './packages/element/tsconfig.json',
  },
};
