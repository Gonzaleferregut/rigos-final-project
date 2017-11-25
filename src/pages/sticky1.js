import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../styles/sticky.css'

export default class Sticky1 extends Component {
  render() {
    return(
      <div className="sticky1 sticky animated fadeInLeft">
        <div className="sticky-top"></div>
        <Link to='/Sticky1link'>How you can help!!</Link>
      </div>
    )
  }
}
