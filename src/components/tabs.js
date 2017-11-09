import React, { Component } from 'react'
import Payment from './paymentForm'
import {Tabs, Tab} from 'material-ui/Tabs'
import PersonalInfo from './personalInfo'
import BlackBoard from './blackBoard'
import Messages from './messenger'
import '../tabs.css'

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

const hideAutoFillColorStyle = {
  WebkitBoxShadow: '0 0 0 1000px lightgreen inset'
};

export default class Main extends Component{
  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    }
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    })
  }

  render() {
    return(
      <div className="tabs">
        <Tabs value={this.state.value}
          onChange={this.handleChange}>
          <Tab label="Personal Information" value="a">
            <div>
              <h2 style={styles.headline}>Personal Information</h2>
              <PersonalInfo />
            </div>
          </Tab>

          <Tab label="Schelduling" value="b">
            <div>
              <h2 style={styles.headline}>Availability</h2>
              <table>
                <tbody>
                  <tr>
                    <th>Date</th>
                    <th>Day</th>
                    <th>Availability</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Monday</td>
                    <td>Available</td>
                  </tr>
                    <td>2</td>
                    <td>Tuesday</td>
                    <td>Available</td>
                  <tr>
                    <td>3</td>
                    <td>Wednsday</td>
                    <td>Available</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Thursday</td>
                    <td>Available</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Friday</td>
                    <td>Available</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Tab>

          <Tab label="Messages" value="c">
            <div>
              <Messages/>
            </div>
          </Tab>

          <Tab className="payment" label="Payment" value="d">
            <div className="payment-tab-contain">
              <Payment />
            </div>
          </Tab>
        </Tabs>

        <BlackBoard />
      </div>
    )
  }
}
