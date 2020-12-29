import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';

import theme from './components/Theme';
import Header from './components/Header';
import Footer from './components/Footer';

import LandingScreen from './screens/LandingScreen';
import SignInScreen from './screens/SigninScreen';
import ContactScreen from './screens/ContactScreen';
import TestingScreen from './screens/TestingScreen';

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header />
        <main style={{ minHeight: '80vh' }}>
          <Switch>
            <Route path="/" component={LandingScreen} exact />
            <Route path="/signin" component={SignInScreen} />
            <Route path="/contact" component={ContactScreen} />
            <Route path="/test" component={TestingScreen} />
            <Route path="/hire" component={() => <div>Hire</div>} />
            <Route path="/findwork" component={() => <div>Findwork</div>} />
            <Route path="/profile" component={() => <div>Profile</div>} />
            <Route path="/settings" component={() => <div>Settings</div>} />
            <Route path="/help" component={() => <div>Help</div>} />
            <Route path="/logout" component={() => <div>Log out</div>} />
          </Switch>
        </main>

        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
