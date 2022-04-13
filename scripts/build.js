const shelljs = require('shelljs');
const cwd = process.cwd();
console.log('cwd', cwd);
shelljs.exec('npm run clear');

console.time('lerna run build');

shelljs.exec('lerna run build');

// 将packgaes下的element/lib 移动到根目录做打包
shelljs.mv(`${cwd}/packages/element/lib`, `${cwd}`);

console.timeEnd('lerna run build');
