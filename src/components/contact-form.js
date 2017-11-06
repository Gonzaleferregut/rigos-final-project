import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import { red500, black800, white, lightBlue200 } from 'material-ui/styles/colors';
import axios from 'axios';
import Sticky4 from './sticky4';
import '../form.css';

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
  WebkitBoxShadow: '0 0 0 1000px skyblue inset'
};

export default class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fullName: '',
      email: '',
      phone: '',
      interest: 'Reading'
    }

    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleSelectChange = this.handleSelectChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleTextChange(event) {
    const name = event.target.name
    const value = event.target.value
    this.setState({
      [name]: value // using ES6 computed property name
    })
  }

  handleSelectChange(event) {
    this.setState({
      interest: event.target.textContent
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log(this.state)
    axios.post('https://api.graph.cool/simple/v1/cj9lnrsa36s7t0121n906lvfa', this.state)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  }

  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
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
      <section className="contact-form">
        <div className="top-panel">
          <h2>Contact Me</h2>
        </div>
        <form autoComplete="on" onSubmit={this.handleSubmit} >
          <div className="form">
            <TextField name="fullName" required type="text"   floatingLabelText="Full Name:"
              floatingLabelFixed = "true"
              onChange={this.handleTextChange}
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              inputStyle={hideAutoFillColorStyle} />

            <TextField name="email" required floatingLabelText="Email:" type="email"
              floatingLabelFixed = "true"
              onChange={this.handleTextChange}
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              inputStyle={hideAutoFillColorStyle} />

            <TextField name="phone" required floatingLabelText="Phone Number" type="number"
              floatingLabelFixed = "true"
              onChange={this.handleTextChange}
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
              inputStyle={hideAutoFillColorStyle} />

            <SelectField onChange={this.handleSelectChange}
              floatingLabelText="Interest"
              floatingLabelStyle={styles.floatingLabelStyle}
              value={this.state.interest}>
              <MenuItem value="Reading" primaryText="Reading" />
              <MenuItem value="Math" primaryText="Math" />
              <MenuItem value="Writing" primaryText="Writing" />
              <MenuItem value="Homework Help" primaryText="Homework Help" />
            </SelectField>

            <div className="btn">
              <RaisedButton label="Submit" type="submit"style={{...styles.buttonMargin,...styles.buttonColor}} onClick={this.handleOpen}/>
              <RaisedButton label="Reset" type="reset" style={styles.buttonMargin} />
            </div>
            <Dialog
              title="Thank You for you request"
              actions={actions}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}>
              I will be sure to reach out to you shortly.
            </Dialog>
          </div>
        </form>
        <div className="info-sticky">
          <Sticky4 />
        </div>
      </section>
    )
  }
}
