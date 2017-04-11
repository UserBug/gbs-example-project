'use strict';

console.log('gulp file');
const gulp = require('gulp');
const setGulpTasks = require('gbs');
setGulpTasks(gulp, {
  uglifyLibBundle: false,
  entryPointsFiles: 'lib/ui/client.js',
  lessEntryPointsFiles: 'src/static/css/*.less',
  modulesExternal: ['react'],
  delOldFoldersIgnoreRegExp: /[\/\\]static([\/\\]|$)/ig,

  logDir: 'logs',
  srcDir: 'src',
  libDir: 'lib',
  cssDir: 'lib/static/css/',
  bundlesDir: 'lib/static/js'
});
