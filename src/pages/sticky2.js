import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/sticky.css'

export default class Sticky2 extends Component {
  render() {
    return(
      <div className="sticky2 sticky animated fadeInRight">
        <div className="sticky-top"></div>
        <Link to="/Sticky2link">Students Tips and Tricks!!</Link>
      </div>
    )
  }
}
