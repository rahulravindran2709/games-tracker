import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import App from './app';

injectTapEventPlugin();

ReactDOM.render(<App />, document.getElementById('app'));
if(module.hot) {
	module.hot.accept('./app', () => {
		const NextApp = require('./app').default;
		ReactDOM.render(<NextApp />, document.getElementById('app'));
	});
}
