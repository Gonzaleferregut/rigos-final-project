import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import Home from './pages/Home'
import Link1 from './pages/Link1'
import Link2 from './pages/Link2'
import CreateUser from './pages/Signup'
import LogIn from './pages/Login'
import LoggedIn from './pages/LoginHome'
import NotFound from './pages/NotFound'
import './App.css'

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
        <Route path="/Sticky1link" component={Link1} />
        <Route path="/Sticky2link" component={Link2} />
        <Route path="/CreateUser" component={CreateUser} />
        <Route path="/Login" component={LogIn} />
        <Route exact path="/LoginHome" component={LoggedIn} />
        <Route component={NotFound} />
      </Switch>
      </BrowserRouter>
      </MuiThemeProvider>
      </ApolloProvider>
    )
  }
}
