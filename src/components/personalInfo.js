import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import { black800 } from 'material-ui/styles/colors'
import axios from 'axios'
import '../personalInfo.css'

const styles = {
    floatingLabelStyle: {
      color: black800,
    }
};

const hideAutoFillColorStyle = {
  WebkitBoxShadow: '0 0 0 1000px lightgreen inset'
};

export default class PersonalInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      studentName: "",
      parentName: "",
      parentEmail: "",
      parentAddress: "",
      parentNumber: "",
      teacherEmail: "",
    }
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleTextChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    this.setState({
      [name]: value
    })
    console.log(this.state)
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

  // document.querySelector("form").reset(); // empty out the form after the dialog closes

  render() {
    return(
      <div>
        <form autoComplete="on" className="personal-form" onSubmit={this.handleSubmit}>
          <div className="student-info">
            <div>
              <TextField name="studentName" required type="text"   floatingLabelText="Student Name:"
              floatingLabelFixed = "true"
              floatingLabelStyle={styles.floatingLabelStyle}
              inputStyle={hideAutoFillColorStyle}
              onChange={this.handleTextChange}/>

              <TextField name="parentName" required type="text"   floatingLabelText="Parent Name:"
              floatingLabelFixed = "true"
              floatingLabelStyle={styles.floatingLabelStyle}
              inputStyle={hideAutoFillColorStyle}
              onChange={this.handleTextChange}/>
            </div>
            <div>
              <TextField name="parentEmail" required type="email"   floatingLabelText="Parent Email:"
              floatingLabelFixed = "true"
              floatingLabelStyle={styles.floatingLabelStyle}
              inputStyle={hideAutoFillColorStyle}
              onChange={this.handleTextChange}/>

              <TextField name="parentAddress" required type="text"   floatingLabelText="Parent Address:"
              floatingLabelFixed = "true"
              floatingLabelStyle={styles.floatingLabelStyle}
              inputStyle={hideAutoFillColorStyle}
              onChange={this.handleTextChange}/>
            </div>
            <div>
              <TextField name="parentNumber" required type="number"   floatingLabelText="Parent Phone Number:"
              floatingLabelFixed = "true"
              floatingLabelStyle={styles.floatingLabelStyle}
              inputStyle={hideAutoFillColorStyle}
              onChange={this.handleTextChange}/>

              <TextField name="teacherEmail" required type="email"   floatingLabelText="Teacher Email:"
              floatingLabelFixed = "true"
              floatingLabelStyle={styles.floatingLabelStyle}
              inputStyle={hideAutoFillColorStyle}
              onChange={this.handleTextChange}/>
            </div>
          </div>
          <div className="BTN">
            <RaisedButton label="Edit" type="submit"/>
          </div>
        </form>
      </div>
    )
  }
}
