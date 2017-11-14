import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from './pages/home';
import CreateUser from './pages/signingUp';
import LoggedIn from './pages/login-home'
import LogIn from './pages/log-in';
import Link1 from './pages/link1';
import Link2 from './pages/link2';
import NotFound from './pages/NotFound';
import './App.css';

const httpLink = new HttpLink({
  uri: 'https://api.graph.cool/simple/v1/cj9rk264bd1j501136auolac2'
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <MuiThemeProvider>
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sticky1link" component={Link1} />
        <Route path="/sticky2link" component={Link2} />
        <Route path="/createUser" component={CreateUser} />
        <Route path="/login" component={LogIn} />
        <Route path="/login-home" component={LoggedIn} />
        <Route component={NotFound} />
      </Switch>
      </BrowserRouter>
      </MuiThemeProvider>
      </ApolloProvider>
    );
  }
}
