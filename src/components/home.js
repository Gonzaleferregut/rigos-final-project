import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import Header from './header'
import Carousel from './carousel'
import Sticky1 from './sticky1'
import Sticky2 from './sticky2'
import Sticky3 from './sticky3'
import Services from './services'
import Quote from './quote-generator'
import Footer from './footer'
import LoggedIn from './login-home'
import { Container, Row, Col } from 'reactstrap'
import MediaQuery from 'react-responsive'

class Home extends Component {

  _logout = () => {
    // remove token from local storage and reload page to reset apollo client
    localStorage.removeItem('graphcoolToken')
    window.location.reload()
  }

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
      return this.render.LoggedOut()
    }
  }

  renderLoggedIn() {
    return(
      <LoggedIn/>
    )
  }

  renderLoggedOut() {
    return (
      <Container fluid>
        <div className="container">
          <Row>
          <Col>
            <Header />
          </Col>
          </Row>
          <Row>
          <Col>
            <Carousel />
          </Col>
          </Row>
          <Row>
          <Col>
            <div className="sticky-contain">
              <Sticky1 />
              <Sticky2 />
              <Sticky3 />
            </div>
          </Col>
          </Row>
          <Row>
          <Col>
            <Services />
          </Col>
          </Row>
          <Row>
          <Col>
            <Quote />
          </Col>
          </Row>
          <Row>
          <Col>
            <Footer />
          </Col>
          </Row>
        </div>
      </Container>
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
})(Home)
