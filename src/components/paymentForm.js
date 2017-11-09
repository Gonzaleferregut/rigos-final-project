import React, { Component } from 'react'
import { black800 } from 'material-ui/styles/colors';
import axios from 'axios'
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

export default class Payment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      owner: "",
      cvv: "",
      cardNumber: "",
    }
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleSelectChange = this.handleSelectChange.bind(this)
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

  render() {
    return(
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
              <select className="expDate"
              onChange={this.handleSelectChange}>
                <option defaultValue>Month</option>
                <option value="january">January</option>
                <option value="february">February</option>
                <option value="march">March</option>
                <option value="april">April</option>
                <option value="may">May</option>
                <option value="june">June</option>
                <option value="july">July</option>
                <option value="august">August</option>
                <option value="september">September</option>
                <option value="october">October</option>
                <option value="november">November</option>
                <option value="december">December</option>
              </select>
              <select className="expYear"
              onChange={this.handleSelectChange}>
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
