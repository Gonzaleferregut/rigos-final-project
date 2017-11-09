import React, { Component } from 'react'
import LinkHeader from './headerlink'
import LoggingInForm from './loginForm'

export default class LogIn extends Component {
  render() {
    return(
      <div className="container">
        <LinkHeader />
        <LoggingInForm />
      </div>
    )
  }
}
