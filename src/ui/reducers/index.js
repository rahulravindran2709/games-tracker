import { combineReducers } from 'redux';
import authreducer from './authreducer';
import corereducer from './corereducer';

const reducer = combineReducers({ authreducer, corereducer });
export default reducer;
