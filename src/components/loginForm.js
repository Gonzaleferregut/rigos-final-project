import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import { compose } from 'react-compose';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import '../logIn.css'

const hideAutoFillColorStyle = {
  WebkitBoxShadow: '0 0 0 1000px white inset'
};

class LoggingInForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.handleTextChange = this.handleTextChange.bind(this)
  }

  _loginUser = async (event) => {
    event.preventDefault()
    const { email, password } = this.state
    console.log(this.state)
    try {
      const response = await this.props.authenticateUserMutation({ variables: { email, password } })
      localStorage.setItem('graphcoolToken', response.data.authenticateUser.token)
      console.log(response.data)
      window.location.reload()
      document.querySelector('form').reset()
      // this.props.history.push('/')
    } catch (e) {
      console.error('An error occured: ', e)
      // this.props.history.push('/')
    }
  }

  handleTextChange(event) {
    const name = event.target.name
    const value = event.target.value
    this.setState({
      [name]: value // using ES6 computed property name
    })
  }

  render() {
    return(
      <MuiThemeProvider>
        <div className="contain">
          <div className="logIn">
            <form autoComplete="on" onSubmit={this._loginUser}>
              <TextField name="email"
              hintText="Please Enter Your Email"
              floatingLabelText="Email"
              type="email" required
              inputStyle={hideAutoFillColorStyle}
              onChange = {this.handleTextChange}/>
              <TextField name = "passWord"
              hintText="Please Enter Your Password"
              floatingLabelText="Password"
              type="password" required
              inputStyle={hideAutoFillColorStyle}
              onChange = {this.handleTextChange}/>
              <div className="button">
                <input className="submit" type="submit"/>
                <input className="reset" type="reset" />
              </div>
            </form>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

const AUTHENTICATE_EMAIL_USER = gql`
  mutation AuthenticateUser($email: String!, $password: String!) {
    authenticateUser(email: $email, password: $password) {
      token
    }
  }
`

const LOGGED_IN_USER_QUERY = gql`
  query LoggedInUserQuery {
    loggedInUser {
      id
    }
  }
`

export default compose(
  graphql(AUTHENTICATE_EMAIL_USER, {name: 'authenticateUserMutation'}),
  graphql(LOGGED_IN_USER_QUERY, {
    name: 'loggedInUserQuery',
    options: { fetchPolicy: 'network-only' }
  })
)(LoggingInForm)
