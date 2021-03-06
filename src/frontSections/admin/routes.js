import React from 'react';
import {Route} from 'react-router';
import App from './layout/App';
import Home from '../../pages/Home';
import Error404 from '../../pages/error/Error404';

const routes = (
  <Route component={App} >
    <Route path="/admin" name="home" component={Home}/>
    <Route status={404} path="*" component={Error404} />
  </Route>
);

export {
  routes,
  routes as default
};
