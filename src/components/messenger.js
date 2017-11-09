import React, { Component } from 'react';
import '../messenger.css';

export default class Messages extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: ""
    }
    this.handleTextChange=this.handleTextChange.bind(this)
  }

  handleTextChange = (event) => {
    const value = event.target.value
    this.setState({
      message: value
    })
    console.log(this.state)
  }

  render() {
    return(
      <div className="message-contain">
        <div className="inputs">
          <input className="inputField" name="message" type="text"
          onChange={this.handleTextChange}/>
          <input className="post-btn" type="submit" value="Post"/>
        </div>
      </div>
    )
  }
}
