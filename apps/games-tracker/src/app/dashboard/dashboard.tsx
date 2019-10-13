import React from 'react';
import { AppState } from '../reducer';
import { connect } from 'react-redux';

const mapStateToProps = (store: AppState) => ({
  played: store.dashboard.recentlyPlayed
});

type DashboardConnectedState = ReturnType<typeof mapStateToProps>;
type DashboardProps = DashboardConnectedState;

function Dashboard(props: DashboardProps) {
  const { played } = props;
  return (
    <div>
      <div>Dashboard</div>
      {played.map(game => (
        <div>{game.title}</div>
      ))}
    </div>
  );
}

export default connect(mapStateToProps)(Dashboard);
