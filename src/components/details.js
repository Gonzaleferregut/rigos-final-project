import React, { Component } from 'react';

export default class Details extends Component {
  render() {
    return(
      <div className="details">
        <p className="reading">This is text about our reading program</p>
        <p className="math">Math</p>
        <p className="writting">Writting</p>
        <p className="homework-help">homework-help</p>
      </div>
    )
  }
}
