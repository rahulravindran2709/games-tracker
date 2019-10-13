import { DashboardState, DashboardActionTypes } from './types';

const initialState: DashboardState = {
  recentlyPlayed: [
    {
      id: 1,
      title: 'My title',
      description: 'Some description'
    }
  ]
};
export function dashboardReducer(
  state = initialState,
  action: DashboardActionTypes
): DashboardState {
  const { type, payload } = action;
  switch (type) {
    case 'GET_DASHBOARD':
      return { ...state };
    default:
      return { ...state };
  }
}
