import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authreducer from './authreducer';
import corereducer from './corereducer';
import enums from './enums';
import game from './game';

const reducer = combineReducers({ authreducer,
  corereducer,
  gameDetails: game,
  router: routerReducer,
  enums });
export default reducer;
