import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';

import Form from '../pages/Form';
import Login from '../pages/Login';

import defaultTheme from './theme';
import './style.css';

import Feed from '../pages/Feed';
import Opportunities from '../pages/Opportunities';
import Contacts from '../pages/Clients';
import Document from '../pages/Document';
import Requests from '../pages/Requests';

const Opp = () => <Opportunities title="Oportunidades" />;
const Clients = () => <Opportunities title="Meus Clientes" />;

const App = () => (
  <MuiThemeProvider theme={defaultTheme}>
    <Router>
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/inicio" component={Feed} />
        <Route path="/artigo/:id" component={Document} />
        <Route path="/solicitar" component={Form} />
        <Route path="/minhas-solicitacoes" component={Requests} />
        <Route path="/oportunidades" component={Opp} />
        <Route path="/contatos" component={Clients} />
      </div>
    </Router>
  </MuiThemeProvider>
);

export default App;
