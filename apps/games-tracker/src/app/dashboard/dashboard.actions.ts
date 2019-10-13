import { Game, GET_DASHBOARD, DashboardActionTypes } from './types';

export function getDashboard(games: Game[]): DashboardActionTypes {
  return {
    type: GET_DASHBOARD,
    payload: {
      recentlyPlayed: games
    }
  };
}
