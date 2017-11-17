import React, { Component } from 'react'
import CreatePayment from './CreatePayment'
import {Tabs, Tab} from 'material-ui/Tabs'
import PersonalInfo from './personalInfo'
import Messages from './messenger'
import '../styles/logintabs.css'

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
              <div className="calendar-container">
                <iframe src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showPrint=0&amp;showCalendars=0&amp;height=300&amp;wkst=1&amp;hl=en&amp;bgcolor=%23ffffff&amp;src=rigoberto.gonzaleferregut%40gmail.com&amp;color=%23A32929&amp;ctz=America%2FChicago" width="500" height="300" frameBorder="0" scrolling="no"></iframe>
              </div>
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
        <div className="blackBoard">
          <p>
            If you are new to Black Board, first click on the link, create an account, then log into your account for your schelduled tutoring session! <a href="#">Go to Black Board!!</a>
          </p>
        </div>
      </div>
    )
  }
}
