import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import RaisedButton from 'material-ui/RaisedButton'
import { black800 } from 'material-ui/styles/colors';
import '../paymentForm.css'

const styles = {
  headline: {
    fontSize: 24,
    margin: 5,
    fontWeight: 400,
  },
    floatingLabelStyle: {
      color: black800,
    }
};

const hideAutoFillColorStyle = {
  WebkitBoxShadow: '0 0 0 1000px skyblue inset'
};

class CreatePayment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      owner: "",
      cvv: "",
      cardNumber: "",
      expMonth: "",
      expYear: ""
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
// how to save result to
  handleSelectChange(val) {
    let y = document.getElementById("expyear").options;
    let x = document.getElementById("expyear").selectedIndex;
    let month = y[x].text
    this.setState({
        expmonth: month,
        // expyear: year
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log(this.state)
    this.getExpMonth()
    this.getExpYear()
    // this._createPayment()
  }

  _createPayment = async () => {
      const options = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER']
      const key = parseInt(this.state.expmonth)
      const expmonth = options[key]
      const { owner, cvv, cardNumber, expyear } = this.state
      try {
          await this.props.createPaymentMutation({
              variables: {
                owner: "",
                cvv: "",
                cardNumber: "",
                expmonth: "",
                // expyear: ""
              }
          })
      } catch (error) {
          console.log(error)
      }
  }

  getExpMonth(val) {
    let y = document.getElementById("expmonth").options;
    let x = document.getElementById("expmonth").selectedIndex;
    // let month = y[x].text
    console.log(y[x].text)
    document.querySelector("form").reset()
}

  getExpYear(val) {
    let y = document.getElementById("expyear").options;
    let x = document.getElementById("expyear").selectedIndex;
    let year = y[x].text
    console.log(y[x].text)
  }

  render() {
    return (
      <div>
        <div className="payment-contain">
          <h2 style={styles.headline}>Confirm Payment</h2>
          <div className="form">
            <form autoComplete="on" onSubmit={this.handleSubmit}>
              <input name="owner" className="input" type="text" placeholder="Owner"
              onChange={this.handleTextChange}/>
              <input name="cvv" className="input" type="text" placeholder="CVV"
              onChange={this.handleTextChange}/>
              <input name="cardNumber" className="input" type="number" placeholder="Card Number"
              onChange={this.handleTextChange}/>
              <select className="expDate" id="expmonth"
              // onChange={this.getExpMonth}
              onChange={this.handleSelectChange}>
                <option defaultValue>Month</option>
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>
              <select className="expYear" id="expyear"
                onChange={this.getExpYear}>
                <option>2025</option>
                <option>2024</option>
                <option>2023</option>
                <option>2022</option>
                <option>2021</option>
                <option>2020</option>
                <option>2019</option>
                <option>2018</option>
                <option defaultValue>2017</option>
                <option>2016</option>
                <option>2015</option>
                <option>2014</option>
                <option>2013</option>
              </select>
              <div className="pay-btn-contain">
                <input className="pay-btn" type="submit" value="Submit"/>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

const CREATE_PAYMENT_MUTATION = gql`
mutation CreatePaymentMutation($owner: String!, $cvv: String!, $cardNumber: String!, $expmonth: Expmonth!, $expyear: Expyear!) {
    createPayment(
        owner: $owner,
        cvv: $cvv,
        cardNumber: $cardNumber,
        expmonth: $expmonth,
        expyear: $expyear
    ) {
        id
        createdAt
        owner
    }
}
`

export default graphql(CREATE_PAYMENT_MUTATION, { name: 'createPaymentMutation' })(CreatePayment)
