import { defineConfig } from 'dumi';

const { getPackages } = require('./scripts/common');
const packageJSON = require('./package.json');

const isProd = process.env.NODE_ENV === 'production';
const doman = 'https://ayiaq1.github.io/schema-form/';
const packages = getPackages().map((item) => {
  return `packages/${item}/src`;
});
export default defineConfig({
  title: packageJSON.name,
  base: isProd ? doman : '/',
  publicPath: isProd ? doman : '/',
  devtool: 'eval-cheap-module-source-map',
  mode: 'doc',
  hash: true,
  outputPath: 'docs-dist',
  history: {
    type: 'hash',
  },
  alias: {},
  webpack5: {},
  esbuild: {},
  fastRefresh: {},
  dynamicImport: {},
  manifest: {
    fileName: 'manifest.json',
  },
  nodeModulesTransform: {
    type: 'none',
    exclude: [],
  },
  styles: ['https://lib.baomitu.com/antd/4.19.3/antd.css'],
  resolve: {
    includes: ['docs', ...packages],
  },
  chainWebpack: function (config) {
    config.merge({
      optimization: {
        splitChunks: {
          automaticNameDelimiter: '.',
        },
      },
    });
  },
});
