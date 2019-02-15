import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';

import Root from '../components/Root';
import Main from '../pages/Main';
import Crm from '../pages/Crm';
import LandingPage from '../pages/Landing';
import defaultTheme from './theme';
import './style.css';

const LoginPage = () => <h1>Login</h1>;

const MainPage = () => (
  <Root>
    <Main />
  </Root>
);

const CrmPage = () => (
  <Root>
    <Crm />
  </Root>
);

const App = () => (
  <MuiThemeProvider theme={defaultTheme}>
    <Router>
      <div>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/crm" component={CrmPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/landing" component={LandingPage} />
      </div>
    </Router>
  </MuiThemeProvider>
);

export default App;
