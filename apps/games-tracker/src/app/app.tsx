import React, { useEffect, useState } from 'react';
import { Message } from '@games-tracker-workspace/api-interfaces';
import Button from '@material-ui/core/Button';

export const App = () => {
  const [m, setMessage] = useState<Message>({ message: '' });

  useEffect(() => {
    fetch('/api')
      .then(r => r.json())
      .then(setMessage);
  }, []);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Welcome to games-tracker!</h1>
        <img
          width="450"
          src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png"
          alt="alternativetext"
        />
      </div>
      <Button variant="contained" color="primary">
      Hello World
    </Button>
      <div>{m.message}</div>
    </>
  );
};

export default App;
