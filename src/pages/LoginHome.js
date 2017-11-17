import React, { Component } from 'react'

import LoginHeader from '../components/login-header'
import LoginTabs from '../components/logintabs'
import Quote from '../components/quote-generator'
import Footer from '../components/footer'
import '../App.css'

class LoggedIn extends Component {
  render() {
    return (
      <div className="container">
      <LoginHeader />
      <LoginTabs />
      <Quote />
      <Footer />
      </div>
    )
  }
}

export default LoggedIn
