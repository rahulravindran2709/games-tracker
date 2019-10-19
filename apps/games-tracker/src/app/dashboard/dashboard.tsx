import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { AppState } from '../reducer';

const mapStateToProps = (store: AppState) => ({
  played: store.dashboard.recentlyPlayed
});

type DashboardConnectedState = ReturnType<typeof mapStateToProps>;
type DashboardProps = DashboardConnectedState;

function Dashboard(props: DashboardProps) {
  const { played, redirect } = props;

  return (
    <div>
      <button
        onClick={() => {
          redirect('/details');
        }}
      >
        Link
      </button>
      ;<div>Dashboard</div>
      {played.map(game => (
        <div key={game.id}>{game.title}</div>
      ))}
    </div>
  );
}

export default connect(
  mapStateToProps,
  {
    redirect: push
  }
)(Dashboard);
