import React, { Component } from 'react'
import axios from 'axios'
import '../styles/quote.css'

export default class Quote extends Component {
  constructor(props) {
    super(props)
    this.state = {
        quote: '',
        author: ''
    }
  }

  componentDidMount() {
    axios.get(`http://quotes.rest/qod/?category=students`)
    .then(res => {
      this.setState({
        quote: res.data.contents.quotes[0].quote,
        author: res.data.contents.quotes[0].author
      })
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return(
      <div>
        <hr />
          <div className="quote-contain">
            <p className="quote">
              {this.state.quote}
            </p>
            <p className="author">
              {this.state.author}
            </p>
          </div>
      </div>
    )
  }
}
