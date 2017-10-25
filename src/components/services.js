import React, { Component } from 'react';
import Details from './details';
import About from './about-me.js';
import Contact from './contact-form';
import '../services.css'

export default class Services extends Component {

  render() {
    return(
      <div className="service_contact">
        <section>
          <div className="top-panel">
            <h2>Services</h2>
          </div>
          <div className="subjects">
            <a href="#">Reading</a>
            <a href="#">Math</a>
            <a href="#">Writting</a>
            <a href="#">Homework Help</a>
            <Details />
          </div>
        </section>
        <About />
        <Contact />
      </div>
    )
  }
}
