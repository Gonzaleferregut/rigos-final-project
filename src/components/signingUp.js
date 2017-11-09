import React, { Component } from 'react'
import LinkHeader from './headerlink'
import CreateUser from './createUser'

export default class NewUser extends Component {
  render() {
    return(
      <div className="container">
        <LinkHeader />
        <CreateUser />
      </div>
    )
  }
}
