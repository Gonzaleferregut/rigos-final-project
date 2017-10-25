import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../sticky.css';

export default class Sticky1 extends Component {
  render() {
    return(
      <div className="sticky1 sticky">
        <div className="sticky-top"></div>
        <Link to='/sticky1link'>How you can help!!</Link>
      </div>
    )
  }
}
