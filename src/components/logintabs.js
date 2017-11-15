import React, { Component } from 'react'
import CreatePayment from './CreatePayment'
import {Tabs, Tab} from 'material-ui/Tabs'
import PersonalInfo from './personalInfo'
import BlackBoard from './blackBoard'
import Messages from './messenger'
import Calendar from './calendar'
import '../logintabs.css'

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

export default class LoginTabs extends Component{
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
              <Calendar/>
            </div>
          </Tab>

          <Tab label="Messages" value="c">
            <div>
              <Messages/>
            </div>
          </Tab>

          <Tab className="payment" label="Payment" value="d">
            <div className="payment-tab-contain">
              <CreatePayment />
            </div>
          </Tab>
        </Tabs>
        <BlackBoard />
      </div>
    )
  }
}
