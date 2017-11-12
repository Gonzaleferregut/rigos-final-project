import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import '../loggedIn-header.css'


export default class LoginHeader extends Component {

  _logout = () => {
    // remove token from local storage and reload page to reset apollo client
    localStorage.removeItem('graphcoolToken')
    window.location.reload()
  }

  render() {
    return(
      <div>
        <header>
          <div className="img_title">
            <img className="logo" src="https://www.gravatar.com/userimage/126022818/c60c2cc94305c1a7ad6c8d8d77de3f1d?size=120" alt="Stacked Books" />
            <h1>Elementary Tutor</h1>
            <div className="logout-btn-container">
              <RaisedButton label="Logout" type="submit" className="logout-btn"
              // onClick={this._logout()}
              />
            </div>
          </div>
        </header>
      </div>
    )
  }
}
