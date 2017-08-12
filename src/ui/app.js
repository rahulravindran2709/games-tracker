import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import GamesTrackerApp from 'components/GamesApp';
import store from './store/gametracker';

const App = () => (<Router ><MuiThemeProvider>
  <Provider store={store}><GamesTrackerApp /></Provider></MuiThemeProvider></Router>);
export default App;
