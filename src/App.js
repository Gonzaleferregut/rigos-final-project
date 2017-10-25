import React, { Component } from 'react';
import Header from './components/header';
import Carousel from './components/carousel';
import Services from './components/services';
import Sticky1 from './components/sticky1';
import Sticky2 from './components/sticky2';
import Sticky3 from './components/sticky3';
import Quote from './components/quote-generator';
import Footer from './components/footer';
import {BrowserRouter, Route} from 'react-router-dom';
import Link1 from './components/link1';
import Link2 from './components/link2';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Carousel />
          <div className="sticky-contain">
            <Route exact path="/" component={Sticky1} />
            <Route path="/sticky1link" component={Link1} />

            <Route exact path="/" component={Sticky2} />
            <Route path="/sticky2link" component={Link2} />

            <Sticky3 />
          </div>
          <Services />
          <Quote />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
