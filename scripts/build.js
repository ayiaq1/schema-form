const shelljs = require('shelljs');
const cwd = process.cwd();

console.time('npm run build');

// 进入packgaes下的element做打包
shelljs.cd(`${cwd}/packages/element`);

shelljs.exec(`npm run build`);

shelljs.cp(`${cwd}/README.md`, `${cwd}/packages/element`);

console.timeEnd('npm run build');
