// 清理所有包
const shelljs = require('shelljs');
const { getPackages, cleanDir } = require('./common');

const dirs = getPackages();
// 保留packages/xx/lib 用于其余模块相对路径引入
// dirs.forEach((name) => {
//   cleanDir(`./packages/${name}`);
// });

console.log('    > packages are all clear');

const cache = ['./lib', 'dist', '*.tgz'].concat(dirs);

shelljs.rm('-rf', ...cache);

console.log('    > fe-common are all clear');
