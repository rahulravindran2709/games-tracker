import React from 'react';

class Dashboard extends React.Component {
  constructor(props) {
    console.log(props,'Props for dashboard')
    super(props);
  }
  render() {
    return (<div>Dashboard</div>);
  }
}
export default Dashboard;
