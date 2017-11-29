import React, { Component } from 'react';
// import { graphql } from 'react-apollo'
// import gql from 'graphql-tag'
import '../styles/messenger.css';

export default class Messages extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: ""
    }
    this.handleTextChange=this.handleTextChange.bind(this)
    this.handleClick=this.handleClick.bind(this)
  }

  handleTextChange = (event) => {
    const value = event.target.value
    this.setState({
      message: value
    })
    console.log(this.state)
  }

  handleClick = (event) => {
    event.preventDefault()

  }

  render() {
    return(
      <div className="message-contain">
        <div className="inputs">
          <input className="inputField" name="message" type="text"
          onChange={this.handleTextChange}/>
          <input className="post-btn" type="submit" value="Post"
          onClick={this.handleClick}/>
        </div>
      </div>
    )
  }
}

// const CREATE_MESSAGE_MUTATION = gql`
//   mutation
// `
