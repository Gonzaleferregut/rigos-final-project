import React, { Component } from 'react'
import '../flipcard.css'

export default class FlipCard extends Component {
  render() {
    return(
      <div className="maincontainer">
        <div className="thecard">
          <div className="thefront">the front</div>
          <div className="theback">the back</div>
        </div>
      </div>
    )
  }
}
