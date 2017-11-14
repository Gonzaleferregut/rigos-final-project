import React, { Component } from 'react'
import LoginHeader from '../components/login-header'
import Main from '../components/tabs'
import Quote from '../components/quote-generator'
import Footer from '../components/footer'
import { withRouter } from 'react-router-dom'
// import CarouselSlide from './carouselslide'
import '../App.css'

class LoggedIn extends Component {
  render() {
    return (
      <div className="container">
        <LoginHeader />
        <Main />
        <Quote />
        <Footer />
      </div>
    )
  }
}

export default (withRouter(LoggedIn))
