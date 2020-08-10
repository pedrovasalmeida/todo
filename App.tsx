import React from 'react';
import { StatusBar } from 'react-native';

import Main from './src/pages/Main';

const App = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#36213e"
        networkActivityIndicatorVisible
      />
      <Main />
    </>
  );
};

export default App;
