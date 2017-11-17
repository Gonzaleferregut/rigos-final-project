import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import '../styles/header.css'

const styles = {
  mediumIcon: {
    width: 48,
    height: 48,
  },
  medium: {
    width: 96,
    height: 96,
    padding: 24,
  },
};

class LinkHeader extends Component {

  _homeclick = () => this.props.history.push('/')

  render() {
    return(
      <div>
        <header>
          <div className="img_title">
            <img className="logo" src="https://www.gravatar.com/userimage/126022818/c60c2cc94305c1a7ad6c8d8d77de3f1d?size=120" alt="Stacked Books" />
            <h1>Elementary Tutor</h1>
            <nav>
              <IconButton
              iconStyle={styles.mediumIcon}
              style={styles.medium}>
                <ActionHome onClick={this._homeclick} />
              </IconButton>
            </nav>
          </div>
        </header>
      </div>
    )
  }
}

export default (withRouter(LinkHeader))
