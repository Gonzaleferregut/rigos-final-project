import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
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
  buttonColor: {
    color: lightBlue200,
  }
}

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
    axios.post('http://localhost:4000/contact', this.state)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  }

  render() {
    return(
      <section className="contact-form">
        <div className="top-panel">
          <h2>Contact Me</h2>
        </div>
        <form autoComplete="on" onSubmit={this.handleSubmit} >
          <div className="form">
            <TextField name="fullName" required type="text" floatingLabelText="Full Name:"
            onChange={this.handleTextChange}
              errorStyle={styles.errorStyle}
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}/>

            <TextField name="email" required floatingLabelText="Email:" type="email"
              onChange={this.handleTextChange}
              errorStyle={styles.errorStyle}
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}/>

            <TextField name="phone" required floatingLabelText="Phone Number" type="number"
              onChange={this.handleTextChange}
              errorStyle={styles.errorStyle}
              floatingLabelStyle={styles.floatingLabelStyle}
              floatingLabelFocusStyle={styles.floatingLabelFocusStyle}/>

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
              <RaisedButton label="Submit" type="submit"style={{...styles.buttonMargin,...styles.buttonColor}} />
              <RaisedButton label="Reset" type="reset" style={styles.buttonMargin} />
            </div>
          </div>
        </form>
        <div className="info-sticky">
          <Sticky4 />
        </div>
      </section>
    )
  }
}
