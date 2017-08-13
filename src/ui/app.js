import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import createMuiTheme from 'material-ui/styles/theme';
import GamesTrackerApp from 'components/GamesApp';
import store from './store/gametracker';

const theme = createMuiTheme();
const App = () => (<Router ><MuiThemeProvider theme={theme}>
  <Provider store={store}><GamesTrackerApp /></Provider></MuiThemeProvider></Router>);
export default App;
