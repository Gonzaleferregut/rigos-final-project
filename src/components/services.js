import React, { Component } from 'react';
import Details from './details';
import About from './about-me.js';
import Contact from './contact-form';
import { Link } from 'react-router-dom';
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
            <Link to='/reading'>Reading</Link>
            <Link to='/math'>Math</Link>
            <Link to='/writting'>Writting</Link>
            <Link to='/homework-help'>Homework</Link>
            <Details />
          </div>
        </section>
        <About />
        <Contact />
      </div>
    )
  }
}
