import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/home';
import LogIn from './components/log-in';
import Link1 from './components/link1';
import Link2 from './components/link2';
import LinkHeader from './components/headerlink';
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
        <Route path="/home" component={Home} />
        <Route path="/login" component={LogIn} />
{/*         <Route path="/reading" component={Reading} />
        <Route path="/math" component={Math} />
        <Route path="/writting" component={Writting} />
        <Route path="/homework-help" component={Homework} /> */}
      </Switch>
      </BrowserRouter>
    );
  }
}

const Reading = () => {
  <div className="subjects">
    <p>Maybe a conditional statement if reading is clicked display: none for the rest, else display: none for reading!</p>
  </div>
}
