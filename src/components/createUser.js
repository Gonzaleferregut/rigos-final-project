import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import { red500, black800, white, lightBlue200 } from 'material-ui/styles/colors';
import '../logIn.css';

const styles = {
    errorStyle: {
        color: red500,
    },
    floatingLabelStyle: {
        color: black800,
    },
    floatingLabelFocusStyle: {
        color: white,
    },
    buttonMargin: {
        margin: 12
    },
    dialogButtonMargin: {
        margin: 5
    },
    buttonColor: {
        color: lightBlue200,
    }
}

const hideAutoFillColorStyle = {
  WebkitBoxShadow: '0 0 0 1000px white inset'
};

export default class CreateUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      passWord: '',
      name: "",
      open: false
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

  }

  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
    document.querySelector("form").reset(); // empty out the form after the dialog closes
  };

  render() {
    const actions = [
        <RaisedButton
          label="Close"
          primary={true}
          onClick={this.handleClose}
          style={styles.dialogButtonMargin}
        />
    ];

    return(
      <MuiThemeProvider>
        <div className="contain">
          <div className="logIn">
            <form autoComplete="on" onSubmit={this.handleSubmit}>
              <TextField name="name"
              hintText="Please Enter Your Name"
              floatingLabelText="Name"
              type="text" required
              inputStyle={hideAutoFillColorStyle}
              onChange = {this.handleTextChange}/>
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
            <Dialog
                title="Thank You for setting up your account"
                actions={actions}
                modal={false}
                open={this.state.open}
                onRequestClose={this.handleClose}>
                Enjoy everything Elementary Tutors has to offer, you can now log In.
            </Dialog>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}
