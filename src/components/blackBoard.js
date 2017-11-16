import React, { Component } from 'react'
import '../blackBoard.css'


export default class BlackBoard extends Component {
  render() {
    return(
      <div className="blackBoard">
        <p>
          If you are new to Black Board, first click on the link, create an account, then log into your account for your schelduled tutoring session! <a href="#">Go to Black Board!!</a>
        </p>
      </div>
    )
  }
}
