import React, { Component } from 'react';
import LinkHeader from './headerlink';
import Carousel from './carousel';

export default class Link2 extends Component {
  render() {
    return(
      <div className="container">
        <LinkHeader />
        <Carousel />
      </div>
    )
  }
}
