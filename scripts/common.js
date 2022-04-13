const shelljs = require('shelljs');
const path = require('path');
const fs = require('fs');

module.exports.cleanDir = function clean(directory, packages = ['lib/']) {
  shelljs.cd(directory);
  shelljs.rm('-rf', ...packages);
  shelljs.cd('-');
};

module.exports.getPackages = function getPackages(packages = 'packages') {
  const base = process.cwd();
  return fs
    .readdirSync(path.resolve(base, packages))
    .filter((name) => !(name.startsWith('.') || name.startsWith('_')));
};

module.exports.mkdir = function (dir, removable = true) {
  if (removable && fs.existsSync(dir)) {
    shelljs.rm('-rf', dir);
  }
  shelljs.mkdir(dir);
};
