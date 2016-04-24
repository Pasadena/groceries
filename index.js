import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux';

import App from './src/app';
import handlers from './src/reducers/GroceryReducers';

let store = createStore(handlers);

ReactDOM.render(
  <Provider store={store}><App /></Provider>, document.getElementById('app'));
