import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";

import Form from "../pages/Form";

import defaultTheme from "./theme";
import "./style.css";

import FeedPage from "../pages/Feed";

const Login = () => <h1>Login</h1>;
const Feed = () => (
  <div>
    <FeedPage />
  </div>
);
const Document = () => <h1>Document</h1>;
const Requests = () => <h1>Requests</h1>;
const Opportunities = () => <h1>Opportunities</h1>;
const Contacts = () => <h1>Contacts</h1>;

const App = () => (
  <MuiThemeProvider theme={defaultTheme}>
    <Router>
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/inicio" component={Feed} />
        <Route path="/artigo/:id" component={Document} />
        <Route path="/solicitar" component={Form} />
        <Route path="/minhas-solicitacoes" component={Requests} />
        <Route path="/oportunidades" component={Opportunities} />
        <Route path="/contatos" component={Contacts} />
      </div>
    </Router>
  </MuiThemeProvider>
);

export default App;
