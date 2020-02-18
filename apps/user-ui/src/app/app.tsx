import React from 'react';

import './app.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { Route, Link } from 'react-router-dom';
import Toolbar from './toolbar';
import Dashboard from './views/dashboard/dashboard';
import Details from './views/details/details';

export const App = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./${fileName}.${style} file.
   */
  return (
    <div className="app">
      <CssBaseline />
      <Toolbar />
      <Container maxWidth="xl">
        <Route
          path="/"
          exact
          render={() => (
            <Dashboard />
          )}
        />
        <Route
          path="/details/"
          render={() => (
            <Details />
          )}
        />
      </Container>
      {/* END: routes */}
    </div>
  );
};

export default App;
