import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import LandingScreen from './screens/LandingScreen';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" component={LandingScreen} exact />
    </BrowserRouter>
  );
};

export default App;
