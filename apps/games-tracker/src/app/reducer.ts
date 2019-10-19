import { combineReducers } from 'redux';
import { History } from 'history';
import { connectRouter, RouterState } from 'connected-react-router';
import { dashboardReducer as dashboard } from './dashboard/dashboard.reducer';

const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    dashboard
  });

export default createRootReducer;
export type AppState = {
  router: RouterState;
  dashboard: ReturnType<typeof dashboard>;
};
