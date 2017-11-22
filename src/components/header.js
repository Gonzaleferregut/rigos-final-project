import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import FlatButton from 'material-ui/FlatButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import '../styles/header.css'


export default class Header extends Component {
  render() {
    return(
      <div>
        <header>
          <div className="img_title">
            <img className="logo" src="https://www.gravatar.com/userimage/126022818/c60c2cc94305c1a7ad6c8d8d77de3f1d?size=120" alt="Stacked Books" />
            <h1>Elementary Tutor</h1>
            <nav>
              <IconMenu
              iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
              anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
              targetOrigin={{horizontal: 'right', vertical: 'bottom'}}>
                <div className="sub-menu">
                  <Link to="/CreateUser">Sign Up</Link>
                  <Link to="/Login">Log In</Link>
                </div>
              </IconMenu>
            </nav>
          </div>
        </header>
      </div>
    )
  }
}
