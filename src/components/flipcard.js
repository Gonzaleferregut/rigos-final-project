import React, { Component } from 'react'
import '../styles/flipcard.css'

export default class FlipCard extends Component {
  render() {
    return(
      <div className="maincontainer">
        <div className="thecard">
          <div className="thefront">
            <input type="button" value="submit"/>
            <input type="button" value="submit"/>
            <h1>hello</h1>
            <p>say hello</p>
            <input type="button" value="submit"/>
            <input type="button" value="submit"/>
            <input type="button" value="submit"/>
          </div>
          <div className="theback">
            <h1>hello</h1>
            <p>say hello</p>
            <h1>hello</h1>
            <p>say hello</p>
            <h1>hello</h1>
            <p>say hello</p>
            <h1>hello</h1>
            <p>say hello</p>
          </div>
        </div>
      </div>
    )
  }
}
