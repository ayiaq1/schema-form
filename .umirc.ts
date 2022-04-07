import { defineConfig } from 'dumi';

const { getPackages } = require('./scripts/common');

const appName = 'element-form';
const isProd = process.env.NODE_ENV === 'production';
const doman = 'https://ayiaq1.github.io/element-form/';
const packages = getPackages().map((item) => {
  return `packages/${item}/src`;
});
export default defineConfig({
  title: appName,
  base: isProd ? doman : '/',
  publicPath: isProd ? doman : '/',
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
