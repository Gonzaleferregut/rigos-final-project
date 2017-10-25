import React, { Component } from 'react';
import '../quote.css';

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
