import React, { Component } from 'react';
import Reading from './reading';
import Math from './math';
import Writting from './writting';
import Homework from './homework-help';
import '../detail-subjects.css';

export default class Details extends Component {
  render() {
    return(
      <div className="details">
        <Reading />
        <Math />
        <Writting/>
        <Homework />
      </div>
    )
  }
}
