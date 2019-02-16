import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';

import Form from '../pages/Form';
import Login from '../pages/Login';

import defaultTheme from './theme';
import './style.css';

import Feed from '../pages/Feed';
import Landing from '../pages/Landing';
import Opportunities from '../pages/Opportunities';
import Document from '../pages/Document';

const Opp = () => <Opportunities title="Oportunidades" />;
const Clients = () => <Opportunities title="Meus Clientes" bided />;
const Requests = () => <Opportunities title="Minhas Solicitações" />;
const Main = () => <Feed load="Carregando Feed" />;
const Learn = () => <Feed load="Carregando material de estudos" learn />;

const App = () => (
  <MuiThemeProvider theme={defaultTheme}>
    <Router>
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/sobre" component={Landing} />
        <Route path="/inicio" component={Main} />
        <Route path="/aprenda" component={Learn} />
        <Route path="/artigo/:id" component={Document} />
        <Route path="/solicitar" component={Form} />
        <Route path="/minhas-solicitacoes" component={Requests} />
        <Route path="/oportunidades" component={Opp} />
        <Route path="/contatos" component={Clients} />
        <Route path="/landing" component={Landing} />
      </div>
    </Router>
  </MuiThemeProvider>
);

export default App;
