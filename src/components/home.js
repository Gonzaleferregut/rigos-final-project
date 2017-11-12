import React, { Component } from 'react'
import Header from './header'
import Carousel from './carousel'
import Sticky1 from './sticky1'
import Sticky2 from './sticky2'
import Sticky3 from './sticky3'
import Services from './services'
import Quote from './quote-generator'
import Footer from './footer'
import { Container, Row, Col } from 'reactstrap'
import MediaQuery from 'react-responsive'

export default class Home extends Component {
  render() {
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
