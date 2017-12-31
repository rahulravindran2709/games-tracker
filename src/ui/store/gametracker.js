import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import axiosApi from 'middlewares/api';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import reducer from '../reducers';

const initializeStore = (history) => {
  const router = routerMiddleware(history);
  const persistedState = localStorage.getItem('reduxState') ?
  { auth: JSON.parse(localStorage.getItem('reduxState')) } : {};
  return createStore(reducer, persistedState,
    applyMiddleware(logger, thunk, axiosApi, promise(), router));
};


export default initializeStore;
