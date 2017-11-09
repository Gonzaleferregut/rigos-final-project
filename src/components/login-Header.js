import React, { Component } from 'react'
import '../header.css'


export default class loginHeader extends Component {
  render() {
    return(
      <div>
        <header>
          <div className="img_title">
            <img className="logo" src="https://www.gravatar.com/userimage/126022818/c60c2cc94305c1a7ad6c8d8d77de3f1d?size=120" alt="Stacked Books" />
            <h1>Elementary Tutor</h1>
            <nav>
              <ul className="main-menu">
                <li><a href="#">Menu</a>
                  <ul className="sub-menu">
                    <li><a href="#">Register</a></li>
                    <li><a href="#">Log out</a></li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    )
  }
}
