import React, { Component } from 'react';
import About from './about-me.js';
import Contact from './contact-form';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import '../services.css'

export default class Services extends Component {

  render() {
    return (
      <div className="service_contact">
        <section>
          <div className="top-panel">
            <h2>Services</h2>
          </div>
          <BrowserRouter>
            <div>
              <div className="subjects">
                <Link to="/reading">Reading</Link>
                <Link to='/math'>Math</Link>
                <Link to='/writing'>Writing</Link>
                <Link to='/homework-help'>Homework</Link>
              </div>
              <Route path="/reading" component={Reading} />
              <Route path="/math" component={Math} />
              <Route path="/writing" component={Writing} />
              <Route path="/homework-help" component={Homework} />
            </div>
          </BrowserRouter>
        </section>
        <About />
        <Contact />
      </div>
    )
  }
}

const Reading = () => (
  <div className="details">
    <p>Maybe a conditional statement if reading is clicked display: none for the rest, else display: none for reading!</p>
  </div>
)

const Math = () => (
  <div className="details">
    <p>Math is fun!!</p>
  </div>
)

const Writing = () => (
  <div className="details">
    <p>Writing is fun!!</p>
  </div>
)

const Homework = () => (
  <div className="details">
    <p>Homework is fun!!</p>
  </div>
)
