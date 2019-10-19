export const GET_DASHBOARD = 'GET_DASHBOARD';

interface GetDashboardAction {
  type: typeof GET_DASHBOARD;
  payload: { recentlyPlayed: Game[] };
}

export interface Game {
  title: string;
  description: string;
  id: number;
}

export type DashboardActionTypes = GetDashboardAction;
export interface DashboardState {
  recentlyPlayed: Game[];
}
