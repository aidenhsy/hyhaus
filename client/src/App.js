import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';

import theme from './components/Theme';
import Header from './components/Header';
import Footer from './components/Footer';

import LandingScreen from './screens/LandingScreen';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header />

        <Switch>
          <Route path="/" component={LandingScreen} exact />
          <Route path="/hire" component={() => <div>Hire</div>} exact />
          <Route path="/findwork" component={() => <div>Findwork</div>} exact />
          <Route path="/profile" component={() => <div>Profile</div>} exact />
          <Route path="/settings" component={() => <div>Settings</div>} exact />
          <Route path="/help" component={() => <div>Help</div>} exact />
          <Route path="/logout" component={() => <div>Log out</div>} exact />
        </Switch>

        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
