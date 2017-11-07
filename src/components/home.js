import React, { Component } from 'react';
import Header from './header';
import Carousel from './carousel';
import Sticky1 from './sticky1';
import Sticky2 from './sticky2';
import Sticky3 from './sticky3';
import Services from './services';
import Quote from './quote-generator';
import Footer from './footer';

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Carousel />
        <div className="sticky-contain">
          <Sticky1 />
          <Sticky2 />
          <Sticky3 />
        </div>
        <Services />
        <Quote />
        <Footer />
      </div>
    )
  }
}
