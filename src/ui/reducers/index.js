import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authreducer from './authreducer';
import corereducer from './corereducer';

const reducer = combineReducers({ authreducer, corereducer, router: routerReducer });
export default reducer;
