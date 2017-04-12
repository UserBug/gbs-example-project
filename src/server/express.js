import express from 'express';
import bodyParser from 'body-parser';
import notifier from 'node-notifier';
import path from 'path';
import * as config from '../../config';
import time from './../modules/time';
import renderAdmin from './../frontSections/admin';
import renderPublic from './../frontSections/admin';

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
    app.use('/admin', renderAdmin);
    app.use('/', renderPublic);

    app.use((err, req, res, next) => {
      next(err);
    });

    app.listen(config.port, function () {
      res('Express lifted on ' + config.protocol + '://' + config.domain + ':' + config.port);
    });
  })
}

export default startExpress;
