import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';

import Splash from './src/pages/Splash';
import Main from './src/pages/Main';

const App = () => {
  const [timePassed, setTimePassed] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimePassed(true);
    }, 2000);
  }, []);

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#36213e"
        networkActivityIndicatorVisible
      />
      {!timePassed ? <Splash /> : <Main />}
    </>
  );
};

export default App;
