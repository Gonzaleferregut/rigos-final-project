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
      expmonth: "",
      expyear: ""
    }
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.getExpMonth = this.getExpMonth.bind(this)
    this.getExpYear = this.getExpYear.bind(this)
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
    this.getExpMonth()
    this.getExpYear()
    this._createPayment()
  }

  getExpMonth() {
    let y = document.getElementById("expmonth").options;
    let x = document.getElementById("expmonth").selectedIndex;
    let month = y[x].text
    console.log(y[x].text)
    this.setState({
      expmonth: month
    })
    document.querySelector("form").reset()
  }

  getExpYear() {
    let y = document.getElementById("expyear").options;
    let x = document.getElementById("expyear").selectedIndex;
    let year = y[x].text
    console.log(y[x].text)
    this.setState({
      expyear: year
    })
  }

  _createPayment = async () => {
      // const options = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER']
      // const key = parseInt(this.state.expmonth)
      // const expmonth = options[key]
      const { owner, cvv, cardNumber, expmonth, expyear } = this.state
      try {
          await this.props.createPaymentMutation({
              variables: {
                owner: "",
                cvv: "",
                cardNumber: "",
                expmonth: "",
                expyear: ""
              }
          })
      } catch (error) {
          console.log(error)
      }
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
              <input name="cvv" className="input" type="number" placeholder="CVV"
              onChange={this.handleTextChange}/>
              <input name="cardNumber" className="input" type="number" placeholder="Card Number"
              onChange={this.handleTextChange}/>
              <select className="expDate" id="expmonth"
                onChange={this.getExpMonth}>
                <option value="0">January</option>
                <option value="1">February</option>
                <option value="2">March</option>
                <option value="3">April</option>
                <option value="4">May</option>
                <option value="5">June</option>
                <option value="6">July</option>
                <option value="7">August</option>
                <option value="8">September</option>
                <option value="9">October</option>
                <option value="10">November</option>
                <option value="11">December</option>
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
                <option>2017</option>
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
mutation CreatePaymentMutation($owner: String!, $cvv: String!, $cardNumber: String!, $expmonth: Expmonth!, $expyear: String!) {
  createPaymentInfo(
      owner: $owner,
      cvv: $cvv,
      cardNumber: $cardNumber,
      expMonth: $expmonth,
      expYear: $expyear
  ) {
    id
    createdAt
    owner
  }
}
`

export default graphql(CREATE_PAYMENT_MUTATION, { name: 'createPaymentMutation' })(CreatePayment)
