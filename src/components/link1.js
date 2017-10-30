import React, { Component } from 'react';
import LinkHeader from './headerlink';
import Home from './home';
import Carousel from './carousel';
import '../link1.css'

export default class Link1 extends Component {
  render() {
    return(
      <div className="container">
        <LinkHeader />
        <Carousel />
        <div className="info-contain">
          <div className="info">
          <h2>How you can help!</h2>
            <p>
            kjniernfijenfae ebfuaenfunfueaf aefjiaeijfnjanfneafnaef aefheanfinngng aejigbiaernfuaberigubaeiugbae gaenaoenfoaenfonaef a kjfnaijfn aehfaejnfaf afhaoufouahfa faofhuahfuhaf wejfhauf fabsfb
            </p>
          </div>
        </div>
      </div>
    )
  }
}
