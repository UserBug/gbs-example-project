'use strict';

const config = {
  path: {
    logDir: 'logs/build',
    srcDir: 'src',
    libDir: 'lib',
    cssDir: 'lib/static/css/',
    bundlesDir: 'lib/static/js',
    libsBundleFileName: 'libs.js'
  },
  port: 3000,
  protocol: 'http',
  domain: 'localhost'
};

module.exports = config;
