import express from 'express';
import bodyParser from 'body-parser';
import notifier from 'node-notifier';
import apiRouter from './api';
import path from 'path';
import * as config from '../../config';
import time from './../modules/time';
import renderUI from './../ui';

const app = express();
function startExpress() {
  return new Promise((res) => {
    time.start('start server');
    app.on('uncaughtException', (err) =>{
      notifier.notify({
        title: err.statusCode + ' - ' + String(err),
        icon: path.join(__dirname, '/../../static/images/warning.png'),
        message: err.stack
      });
    });

    app.use(express.static('static'));
    app.use(express.static('lib/static'));
    app.use('/js/react.js', express.static('node_modules/react/dist/react.min.js'));
    app.use('/js/react.dom.js', express.static('node_modules/react-dom/dist/react-dom.min.js'));

    app.use(bodyParser.json());
    app.use('/api', apiRouter);
    app.use('/', renderUI);

    app.use((err, req, res, next) => {
      next(err);
    });

    app.listen(config.port, function () {
      res('Express lifted on ' + config.protocol + '://' + config.domain + ':' + config.port);
    });
  })
}

export default startExpress;
