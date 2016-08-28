import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

import routes from './routes';


const el = document.getElementById('application');
const { AppContainer } = require('react-hot-loader');

const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Router history={ browserHistory } routes={ routes } />
    </AppContainer>,
    el
  );
};

render();

if (module.hot) {
  module.hot.accept('./routes', render);
}
