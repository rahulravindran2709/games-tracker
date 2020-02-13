import React from 'react';
import Paper from '@material-ui/core/Paper';
import './dashboard.css';

/* eslint-disable-next-line */
export interface DashboardProps { }

export const Dashboard = (props: DashboardProps) => {
  return (
    <Paper>
      <h1>Welcome to Dashboard component!</h1>
    </Paper>
  );
};

export default Dashboard;
