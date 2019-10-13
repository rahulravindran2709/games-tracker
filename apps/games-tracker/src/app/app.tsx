import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Message } from '@games-tracker-workspace/api-interfaces';

import Dashboard from './dashboard/dashboard';
import Details from './details/details';

export const App = () => {
  const [m, setMessage] = useState<Message>({ message: '' });

  useEffect(() => {
    fetch('/api')
      .then(r => r.json())
      .then(setMessage);
  }, []);

  return (
    <Switch>
      <Route path="/details">
        <Details />
      </Route>
      <Route path="/">
        <Dashboard />
      </Route>
    </Switch>
  );
};

export default App;
