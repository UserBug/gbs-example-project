'use strict';

const gulp = require('gulp');
const setGulpTasks = require('gbs');
const config = require('./config');

setGulpTasks(gulp, Object.assign({
  uglifyLibBundle: true,
  entryPointsFiles: 'lib/ui/client.js',
  lessEntryPointsFiles: 'src/static/css/*.less',
  modulesExceptions: ['react', 'react-dom'],
  delOldFoldersIgnoreRegExp: /[\/\\]static([\/\\]|$)/ig
}, config.path));
