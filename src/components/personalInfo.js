import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import { black800 } from 'material-ui/styles/colors'
// import axios from 'axios'
import '../styles/flipcard.css'
import '../styles/personalInfo.css'

const styles = {
    floatingLabelStyle: {
      color: black800,
    }
};

const hideAutoFillColorStyle = {
  WebkitBoxShadow: '0 0 0 1000px lightgreen inset'
};

class PersonalInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      studentName: "",
      parentName: "",
      parentEmail: "",
      parentAddress: "",
      parentPhoneNumber: "",
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
    this._personalInfo()
    document.querySelector("form").reset()
    this.flip180()
  }

// flips the card 180 on y axis onSubmit
  flip180() {

  }

// flips the card 180 back to front of card to edit onSubmit
  flipback180() {

  }

  _personalInfo = async () => {
    const { studentName, parentName, parentEmail, parentAddress, parentPhoneNumber, teacherEmail } = this.state
    try {
      await this.props.createPersonalInfoMutation({
        variables: {
          studentName,
          parentName,
          parentEmail,
          parentAddress,
          parentPhoneNumber,
          teacherEmail
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

  // document.querySelector("form").reset(); // empty out the form after the dialog closes

  render() {
    return(
      <div className="maincontainer">
        <div className="thecard">
          <div className="thefront">
            <form autoComplete="on" className="personal-form"  onSubmit={this.handleSubmit}>
              <div className="student-info">
                <div>
                  <TextField name="studentName" required type="text"   floatingLabelText="Student Name:"
                  floatingLabelFixed
                  floatingLabelStyle={styles.floatingLabelStyle}
                  inputStyle={hideAutoFillColorStyle}
                  onChange={this.handleTextChange}/>

                  <TextField name="parentName" required type="text"   floatingLabelText="Parent Name:"
                  floatingLabelFixed
                  floatingLabelStyle={styles.floatingLabelStyle}
                  inputStyle={hideAutoFillColorStyle}
                  onChange={this.handleTextChange}/>
                </div>
                <div>
                  <TextField name="parentEmail" required type="email"   floatingLabelText="Parent Email:"
                  floatingLabelFixed
                  floatingLabelStyle={styles.floatingLabelStyle}
                  inputStyle={hideAutoFillColorStyle}
                  onChange={this.handleTextChange}/>

                  <TextField name="parentAddress" required type="text"   floatingLabelText="Parent Address:"
                  floatingLabelFixed
                  floatingLabelStyle={styles.floatingLabelStyle}
                  inputStyle={hideAutoFillColorStyle}
                  onChange={this.handleTextChange}/>
                </div>
                <div>
                  <TextField name="parentNumber" required type="number"   floatingLabelText="Parent Phone Number:"
                  floatingLabelFixed
                  floatingLabelStyle={styles.floatingLabelStyle}
                  inputStyle={hideAutoFillColorStyle}
                  onChange={this.handleTextChange}/>

                  <TextField name="teacherEmail" required type="email"   floatingLabelText="Teacher Email:"
                  floatingLabelFixed
                  floatingLabelStyle={styles.floatingLabelStyle}
                  inputStyle={hideAutoFillColorStyle}
                  onChange={this.handleTextChange}/>
                </div>
              </div>
              <div className="BTN">
                <RaisedButton label="Save" type="submit"
                onClick={this.flip180} />
              </div>
            </form>
          </div>
          <div className="theback">
            <div>
              <p>Student Name:  {}</p>
              <p>Parent Name:  {}</p>
              <p>Parent Email:  {}</p>
              <p>Parent Address:  {}</p>
              <p>Parent Phone Number:  {}</p>
              <p>Teacher Email:  {}</p>
              <RaisedButton label="Edit" type="submit"
              onClick={this.flipback180} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const CREATE_PROFILE_MUTATION = gql`
mutation CreatePersonalInfoMutation($studentName: String!, $parentName: String!, $parentEmail: String!, $parentAddress: String!, $parentPhoneNumber: String!, $teacherEmail: String!) {
  createPersonalInfo(
      studentName: $studentName,
      parentName: $parentName,
      parentEmail: $parentEmail,
      parentAddress: $parentAddress,
      parentPhoneNumber: $parentPhoneNumber,
      teacherEmail: $teacherEmail
  ) {
      id
      createdAt
      studentName
  }
}
`

export default graphql(CREATE_PROFILE_MUTATION, { name: 'createPersonalInfoMutation' })(PersonalInfo)
