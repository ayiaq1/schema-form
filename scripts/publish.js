const shelljs = require('shelljs');
const cwd = process.cwd();
// 进入packgaes下的element做打包
shelljs.cd(`${cwd}/packages/element`);
shelljs.exec(`npm version patch`);
shelljs.exec(`npm publish`);
