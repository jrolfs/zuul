import React from 'react';
import { IndexRoute, Route } from 'react-router';

import { App, Calls, NotFound } from './components';


const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Calls} />
    <Route path="calls" component={Calls} />
    <Route path="*" component={NotFound} />
  </Route>
);


export default routes;
