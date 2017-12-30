import React from 'react';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import GamesTrackerApp from 'components/GamesApp';
import initializeStore from 'store/gametracker';

const history = createHistory();
const store = initializeStore(history);
store.subscribe(() => {
  const { auth } = store.getState();
  localStorage.setItem('reduxState', JSON.stringify(auth));
});
const theme = createMuiTheme();
const App = () => (<MuiThemeProvider theme={theme}>
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <GamesTrackerApp />
    </ConnectedRouter>
  </Provider>
</MuiThemeProvider>);
export default App;
