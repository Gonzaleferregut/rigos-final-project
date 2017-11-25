import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import { black800, orange500 } from 'material-ui/styles/colors'
import '../styles/flipcard.css'
import '../styles/personalInfo.css'


const styles = {
  errorStyle: {
    color: orange500,
  },
  underlineStyle: {
    borderColor: black800,
  },
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
      isShowing: false,
    }
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.toggleIsShowing = this.toggleIsShowing.bind(this)
  }

  toggleIsShowing = () => {
    this.setState(prevState => ({
      isShowing: ! prevState.isShowing
    }));
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
    this.toggleIsShowing()
  }

  _personalInfo = async () => {
    const { studentName, parentName, parentEmail, parentAddress, parentPhoneNumber, teacherEmail } = this.state
    try {
      await this.props.createPersonalInfoAndUser({
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

  // _isLoggedIn = () => {
  //   return this.props.loggedInUserQuery.loggedInUser && this.props.loggedInUserQuery.loggedInUser.id !== null
  // }
  //
  // if(this._isLoggedIn()) {
  //   return createPersonalInfo
  // } else {
  //   return
  // }

  render() {
    return(
      <div className="maincontainer">
        <div className="thecard"
        style={{transform: this.state.isShowing ? "rotateY(180deg)" : "none"}}>
          <div className="thefront">
            <form autoComplete="on" className="personal-form"  onSubmit={this.handleSubmit}>
              <div className="student-info">
                <div>
                  <TextField className="textfield" name="studentName" required type="text"
                  hintText="Students Name"
                  placeholder="Students Name"
                  hintStyle={styles.errorStyle}
                  inputStyle={hideAutoFillColorStyle}
                  underlineStyle={styles.underlineStyle}
                  onChange={this.handleTextChange} />

                  <TextField className="textfield" name="parentName" required type="text"
                  hintText="Parents Name"
                  placeholder="Parents Name"
                  hintStyle={styles.errorStyle}
                  inputStyle={hideAutoFillColorStyle}
                  underlineStyle={styles.underlineStyle}
                  onChange={this.handleTextChange} />
                </div>
                <div>
                  <TextField className="textfield" name="parentEmail" required type="email"
                  hintText="Parents Email"
                  placeholder="Parents Email"
                  hintStyle={styles.errorStyle}
                  inputStyle={hideAutoFillColorStyle}
                  underlineStyle={styles.underlineStyle}
                  onChange={this.handleTextChange} />

                  <TextField className="textfield" name="parentAddress" required type="text"
                  hintText="Parents Address"
                  placeholder="Parents Address"
                  hintStyle={styles.errorStyle}
                  inputStyle={hideAutoFillColorStyle}
                  underlineStyle={styles.underlineStyle}
                  onChange={this.handleTextChange}/>
                </div>
                <div>
                  <TextField className="textfield" name="parentPhoneNumber" required type="number"
                  hintText="Parents Number"
                  placeholder="Parents Number"
                  hintStyle={styles.errorStyle}
                  inputStyle={hideAutoFillColorStyle}
                  underlineStyle={styles.underlineStyle}
                  onChange={this.handleTextChange}/>

                  <TextField className="textfield" name="teacherEmail" required type="email"
                  hintText="Teachers Email"
                  placeholder="Teachers Email"
                  hintStyle={styles.errorStyle}
                  inputStyle={hideAutoFillColorStyle}
                  underlineStyle={styles.underlineStyle}
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
              <p>Student Name:  {this.state.studentName}</p>
              <p>Parent Name:  {this.state.parentName}</p>
              <p>Parent Email:  {this.state.parentEmail}</p>
              <p>Parent Address:  {this.state.parentAddress}</p>
              <p>Parent Phone:  {this.state.parentPhoneNumber}</p>
              <p>Teacher Email:  {this.state.teacherEmail}</p>
              <div className="BTN">
                <RaisedButton label="Edit" type="submit"
                onClick={this.toggleIsShowing}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const CREATE_PROFILE_MUTATION = gql`
mutation createPersonalInfoAndUser($studentName: String!, $parentName: String!, $parentEmail: String!, $parentAddress: String!, $parentPhoneNumber: String!, $teacherEmail: String!) {
  createPersonalInfo(
    studentName: $studentName,
    parentName: $parentName,
    parentEmail: $parentEmail,
    parentAddress: $parentAddress,
    parentPhoneNumber: $parentPhoneNumber,
    teacherEmail: $teacherEmail,
    user: {
      email: $email,
      password: $password
    }
  ) {
    id
    user {
      personalInfo {
        id
        studentName
        parentName
        parentEmail
        parentAddress
        parentPhoneNumber
        teacherEmail
      }
    }
  }
}
`
// mutation CreatePersonalInfoMutation($studentName: String!, $parentName: String!, $parentEmail: String!, $parentAddress: String!, $parentPhoneNumber: String!, $teacherEmail: String!) {
//   createPersonalInfo(
//       studentName: $studentName,
//       parentName: $parentName,
//       parentEmail: $parentEmail,
//       parentAddress: $parentAddress,
//       parentPhoneNumber: $parentPhoneNumber,
//       teacherEmail: $teacherEmail
//   ) {
//       id
//       createdAt
//       studentName
//       parentName
//       parentEmail
//       parentAddress
//       parentPhoneNumber
//       teacherEmail
//   }
// }


export default graphql(CREATE_PROFILE_MUTATION, { name: 'createPersonalInfoMutation' })(PersonalInfo)
