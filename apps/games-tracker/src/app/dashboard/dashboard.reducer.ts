import { DashboardState } from './types';

const initialState: DashboardState = {
  recentlyPlayed: []
};
export function dashboardReducer(state = initialState, action): DashboardState {
  const { type, payload } = action;
  switch (type) {
    case 'GET_DASHBOARD':
      return { ...state };
    default:
      return { ...state };
  }
}
