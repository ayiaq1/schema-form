const shelljs = require('shelljs');
const fs = require('fs');
const { mkdir, getPackages } = require('./common');
const cwd = process.cwd();
console.log('cwd > ', cwd);
shelljs.exec('npm run clear');

console.time('lerna run build');

shelljs.exec('lerna run build');

console.timeEnd('lerna run build');
// packages下的 一级文件夹名称
const dirs = getPackages();
const packageJSONName = 'package.json';
const packageJSON = require(`${cwd}/${packageJSONName}`);
packageJSON.files = dirs;
// 将packgaes下的所有文件夹写入到package.json的files里面，用于打包相关文件夹
fs.writeFile(
  packageJSONName,
  JSON.stringify(packageJSON, null, 2),
  function (err) {
    if (!err) {
      mkdir('./lib');

      shelljs.mkdir(...dirs.map((name) => `lib/${name}`));
      shelljs.mkdir(...dirs.map((name) => `lib/${name}/lib`));

      dirs.forEach((name) => {
        shelljs.cp('-r', `packages/${name}/lib/*`, `lib/${name}/lib`);
        shelljs.cp('-r', `packages/${name}/package.json`, `lib/${name}`);
      });

      shelljs.cp('package.json', 'lib/package.json');

      // 由于ci执行路径为. 因此cp到外部。内部使用时应该注释掉下面的操作
      console.log('cwd > ', process.cwd());
      dirs.forEach((name) => {
        shelljs.mkdir(`${name}`);
        shelljs.mkdir(`${name}/lib`);
        shelljs.cp('-r', `packages/${name}/lib/*`, `${name}/lib`);
        shelljs.cp('-r', `packages/${name}/package.json`, `${name}`);
      });

      // shelljs.exec('npm publish lib')
    }
  },
);

// 将packages下的文件夹名称写入到.gitIgnore文件里面
const ignoreName = '.gitignore';
fs.readFile(`${cwd}/${ignoreName}`, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  // 包名前面加 / 代表只忽略根目录
  const packageList = dirs.map((str) => `/${str}`);
  const fileData = Array.from(new Set([...data.split('\n'), ...packageList]));
  let str = '';
  fileData.forEach(
    (val) => (str += `${val.indexOf('#') > -1 ? '\n' : ''}${val}\n`),
  );
  fs.writeFile(ignoreName, str, function (e) {
    if (e) {
      console.log('writeFile error', e);
    }
  });
});
