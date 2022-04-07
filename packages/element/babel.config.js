module.exports = {
  extends: './node_modules/@umijs/fabric/dist/babel.config.js',
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: true,
        },
      },
    ],
  ],
};
