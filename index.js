import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux';

require('./src/less/styles.less');
require('bootstrap/dist/css/bootstrap.css');
require('bootstrap/dist/css/bootstrap-theme.css');

import App from './src/app';
import handlers from './src/reducers/GroceryReducers';

let store = createStore(handlers);

ReactDOM.render(
  <Provider store={store}><App /></Provider>, document.getElementById('app'));
