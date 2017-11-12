import React, { Component } from 'react'
import LoginHeader from './login-header'
import Main from './tabs'
import Quote from './quote-generator'
import Footer from './footer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import '../App.css'

export default class LoggedIn extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <div className="container">
        <LoginHeader />
        <Main />
        <Quote />
        <Footer />
      </div>
      </MuiThemeProvider>
    )
  }
}
