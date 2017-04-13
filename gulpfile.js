'use strict';

const gulp = require('gulp');
const setGulpTasks = require('gbs');
const config = require('./config');

setGulpTasks(gulp, Object.assign({
  uglifyLibBundle: true,
  uglifyBundles: 'public.js',
  entryPointsFiles: 'lib/frontSections/*/client.js',
  lessEntryPointsFiles: 'src/static/css/*.less',
  modulesShim: {
    'react': 'React',
    'react-dom': 'ReactDOM',
    'react-router': 'ReactRouter'
  },
  delOldFoldersIgnoreRegExp: /[\/\\]static([\/\\]|$)/ig
}, config.path));
