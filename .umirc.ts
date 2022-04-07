import { defineConfig } from 'dumi';

const { getPackages } = require('./scripts/common');

const appName = 'element-form';
// const isProd = process.env.NODE_ENV === 'production';
const packages = getPackages().map((item) => {
  return `packages/${item}/src`;
});
export default defineConfig({
  title: appName,
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
