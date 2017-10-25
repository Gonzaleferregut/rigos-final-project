import React, { Component } from 'react';
import Sticky4 from './sticky4';
import '../form.css';

export default class Contact extends Component {
  render() {
    return(
      <section className="contact-form">
        <div className="top-panel">
          <h2>Contact Me</h2>
        </div>
        <form autoComplete="on" action="MAILTO:rigoberto.gonzaleferregut@yahoo.com" method="post" enctype="text/plain">
          <div className="form">
            <label for="fullname">Full Name:</label>
            <input id="fullname" type="text" name="FullName" required/>

            <label for="email">Email:</label>
            <input id="email" type="email" name="Email" required/>

            <label for="phone#">Phone Number:</label>
            <input id="phone#" type="number" name="Phone"/>

            <label for="interest">Interest:</label>
            <select id="interest" name="Interest">
              <option value="Reading" defaultValue>Reading</option>
              <option value="Math">Math</option>
              <option value="Writting">Writting</option>
              <option value="Homework Help">Homework Help</option>
            </select>

            <div className="btn">
              <input className="submit" type="submit"/>
              <input className="reset" type="reset"/>
            </div>
          </div>
        </form>
        <div className="info-sticky">
          <Sticky4 />
        </div>
      </section>
    )
  }
}
