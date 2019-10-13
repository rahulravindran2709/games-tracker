export interface Game {
  title: string;
  description: string;
  id: number;
}

export interface DashboardState {
  recentlyPlayed: Game[];
}
