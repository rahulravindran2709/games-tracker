import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import GamesTrackerApp from 'components/GamesApp';
import store from './store/gametracker';

injectTapEventPlugin();
const App = () => (<MuiThemeProvider>
  <Provider store={store}><GamesTrackerApp /></Provider></MuiThemeProvider>);
ReactDOM.render(<Router ><App /></Router>, document.getElementById('app'));
