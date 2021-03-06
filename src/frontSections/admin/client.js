import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import pagesRoutes from './routes';

ReactDOM.render(<Router history={browserHistory}>{pagesRoutes}</Router>, window.document);
