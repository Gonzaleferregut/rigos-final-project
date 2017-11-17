import React, { Component } from 'react'
import '../styles/flipcard.css'



export default class FlipCard extends Component {
  render() {
    return(
      <div className="maincontainer">
        <div className="thecard faces">
          <div className="thefront faces"><p>hello friend</p><p>what is up</p><p>why does it not work on the other page</p></div>
          <div className="theback faces"><p>Why does this work</p></div>
        </div>
      </div>
    )
  }
}
