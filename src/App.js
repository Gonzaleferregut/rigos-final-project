import React, { Component } from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/home';
import Link1 from './components/link1';
import Link2 from './components/link2';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>  
        <Route exact path="/" component={Home} />
        <Route path="/sticky1link" component={Link1} />
        {/* <Route exact path="/" component={Sticky2} /> */}
        <Route path="/sticky2link" component={Link2} /> 
        </Switch>  
      </BrowserRouter>
    );
  }
}
