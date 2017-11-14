import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import Header from '../components/header'
import Carousel from '../components/carousel'
import Sticky1 from './Sticky1'
import Sticky2 from './Sticky2'
import Sticky3 from '../components/sticky3'
import Services from '../components/services'
import Quote from '../components/quote-generator'
import Footer from '../components/footer'
import LoggedIn from '../pages/LoginHome'


class Home extends Component {

  _isLoggedIn = () => {
    return this.props.loggedInUserQuery.loggedInUser && this.props.loggedInUserQuery.loggedInUser.id !== null
  }

  render() {
    if(this.props.loggedInUserQuery.loading) {
      return (<div>Loading</div>)
    }

    if(this._isLoggedIn()) {
      return this.renderLoggedIn()
    } else {
      return this.renderLoggedOut()
    }
  }

  renderLoggedIn() {
    return(
      <LoggedIn/>
    )
  }

  renderLoggedOut() {
    return (
      <div className="container">
        <Header />
        <Carousel />
        <div className="sticky-contain">
          <Sticky1 />
          <Sticky2 />
          <Sticky3 />
        </div>
        <Services />
        <Quote />
        <Footer />
      </div>
    )
  }
}

const LOGGED_IN_USER_QUERY = gql`
  query LoggedInUserQuery {
    loggedInUser {
      id
    }
  }
`

export default graphql(LOGGED_IN_USER_QUERY, {
  name: 'loggedInUserQuery',
  options: { fetchPolicy: 'network-only' }
})(withRouter(Home))
