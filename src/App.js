import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Home from './components/home';
import LogIn from './components/log-in';
import Link1 from './components/link1';
import Link2 from './components/link2';
import LinkHeader from './components/headerlink';
import NotFound from './pages/NotFound';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/sticky1link" component={Link1} />
        <Route path="/sticky2link" component={Link2} />
        <Route path="/home" component={Home} />
        <Route path="/login" component={LogIn} />
        <Route component={NotFound} />  
      </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}
