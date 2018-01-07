import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth from './auth';
import corereducer from './corereducer';
import enums from './enums';
import game from './game';
import dashboard from './dashboard';
import dialogs from './dialogs';

const reducer = combineReducers({ auth,
  corereducer,
  dashboard,
  dialogs,
  gameDetails: game,
  router: routerReducer,
  enums });
export default reducer;
