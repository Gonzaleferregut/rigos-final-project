import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import { red500, black800, white, lightBlue200 } from 'material-ui/styles/colors';
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

class CreateContact extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fullName: '',
            email: '',
            phone: '',
            interest: '0',
            open: false
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

    handleSelectChange(key) {
        this.setState({
            interest: key.toString()
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log(this.state)
        this._createContact()
    }

    _createContact = async () => {
        const options = ['READING', 'MATH', 'WRITING', 'HOMEWORK']
        const key = parseInt(this.state.interest)
        const interest = options[key]
        const { fullName, email, phone } = this.state
        try {
            await this.props.createContactMutation({
                variables: {
                    fullName,
                    email,
                    phone,
                    interest
                }
            })
            this.handleOpen()
        } catch (error) {
            console.log(error)
        }    
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

        return (
            <section className="contact-form">
                <div className="top-panel">
                    <h2>Contact Me</h2>
                </div>
                <form autoComplete="on" onSubmit={this.handleSubmit} >
                    <div className="form">
                        <TextField name="fullName" required type="text" floatingLabelText="Full Name:"
                            floatingLabelFixed
                            onChange={this.handleTextChange}
                            floatingLabelStyle={styles.floatingLabelStyle}
                            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                            inputStyle={hideAutoFillColorStyle} />

                        <TextField name="email" required floatingLabelText="Email:" type="email"
                            floatingLabelFixed
                            onChange={this.handleTextChange}
                            floatingLabelStyle={styles.floatingLabelStyle}
                            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                            inputStyle={hideAutoFillColorStyle} />

                        <TextField name="phone" required floatingLabelText="Phone Number" type="number"
                            floatingLabelFixed
                            onChange={this.handleTextChange}
                            floatingLabelStyle={styles.floatingLabelStyle}
                            floatingLabelFocusStyle={styles.floatingLabelFocusStyle}
                            inputStyle={hideAutoFillColorStyle} />

                        <SelectField onChange={(event, key) => this.handleSelectChange(key)}
                            floatingLabelText="Interest"
                            floatingLabelStyle={styles.floatingLabelStyle}
                            value={this.state.interest}>
                            <MenuItem value="0" primaryText="Reading" />
                            <MenuItem value="1" primaryText="Math" />
                            <MenuItem value="2" primaryText="Writing" />
                            <MenuItem value="3" primaryText="Homework Help" />
                        </SelectField>

                        <div className="btn">
                            <RaisedButton label="Submit" type="submit" style={{ ...styles.buttonMargin, ...styles.buttonColor }} />
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

const CREATE_CONTACT_MUTATION = gql`
mutation CreateContactMutation($fullName: String!, $email: String!, $phone: String!, $interest: Interest!) {
    createContact(
        fullName: $fullName,
        email: $email,
        phone: $phone,
        interest: $interest
    ) {
        id
        createdAt
        fullName
    }
}
`

export default graphql(CREATE_CONTACT_MUTATION, { name: 'createContactMutation' })(CreateContact)