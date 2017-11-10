import React, { Component } from 'react'
import LoginHeader from './components/login-header'
import Main from './components/tabs'
import Quote from './components/quote-generator'
import Footer from './components/footer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import './app.css'

export default class App extends Component {
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
