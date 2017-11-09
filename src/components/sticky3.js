import React, { Component } from 'react'
import '../sticky.css'

export default class Sticky3 extends Component {
  render() {
    return(
      <div className="sticky3 sticky">
        <div className="sticky-top"></div>
        <p>SCS</p>
        <ol>
          <li>Study</li>
          <li>Comprehend</li>
          <li>Succeed</li>
        </ol>
      </div>
    )
  }
}
