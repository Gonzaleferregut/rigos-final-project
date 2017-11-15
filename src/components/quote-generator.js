import React, { Component } from 'react'
// import axios from 'axios'
import '../quote.css'

// axios.get(`http://quotes.rest/qod/json`)
//   .then(res => {
//     response.send(res.data.contents.quotes[0].quote)
//   })

export default class Quote extends Component {
  render() {
    return(
      <div>
        <hr />
        <div>
          <div className="quote">
            <p>
              "Learning is not attained by chance, <br/>it must be sought for with ardor and <br/>diligence." Abigail Adams
            </p>
          </div>
        </div>
      </div>
    )
  }
}
