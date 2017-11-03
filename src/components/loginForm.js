import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import axios from 'axios';
import '../logIn.css';

const hideAutoFillColorStyle = {
  WebkitBoxShadow: '0 0 0 1000px white inset'
};

export default class LoggingInForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      passWord: ''
    }
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleTextChange(event) {
    const name = event.target.name
    const value = event.target.value
    this.setState({
      [name]: value // using ES6 computed property name
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log(this.state)
    axios.post('http://localhost:4000/logIn', this.state)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  }

  render() {
    return(
      <MuiThemeProvider>
        <div className="contain">
          <div className="logIn">
            <form autoComplete="on" onSubmit={this.handleSubmit}>
              <TextField name="userName"
              hintText="Please Enter Your Username"
              floatingLabelText="Username"
              type="text" required
              inputStyle={hideAutoFillColorStyle}
              onChange = {this.handleTextChange}/>
              <TextField name = "passWord"
              hintText="Please Enter Your Password"
              floatingLabelText="Password"
              type="password" required
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
