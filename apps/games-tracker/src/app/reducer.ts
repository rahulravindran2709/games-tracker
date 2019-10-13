import { combineReducers } from 'redux';
import { dashboardReducer as dashboard } from './dashboard/dashboard.reducer';

const reducer = combineReducers({
  dashboard
});

export default reducer;
