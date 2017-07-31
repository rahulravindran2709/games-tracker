import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store/gametracker';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import GamesTrackerApp from './components/GamesApp';

injectTapEventPlugin();
const App = () => (<Provider store={store}><GamesTrackerApp /></Provider>);
ReactDOM.render(<Router hashType="slash"><App /></Router>, document.getElementById('app'));
