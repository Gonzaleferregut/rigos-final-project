import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import '../logIn.css';

export default class LoggingInForm extends Component {

  render() {
    return(
      <MuiThemeProvider>
        <div className="contain">
          <div className="logIn">
            <form autoComplete="on">
              <TextField hintText="Please Enter Your Username"
              floatingLabelText="Username"
              type="Username" required />
              <TextField hintText="Please Enter Your Password"
              floatingLabelText="Password"
              type="password" required />
              <div className="button">
                <input className="submit" type="submit" />
                <input className="reset" type="reset" />
              </div>
            </form>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}
