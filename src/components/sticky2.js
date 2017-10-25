import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../sticky.css';

export default class Sticky2 extends Component {
  render() {
    return(
      <div className="sticky2 sticky">
        <div className="sticky-top"></div>
        <Link to="/sticky2link">Students Tips and Tricks!!</Link>
      </div>
    )
  }
}
