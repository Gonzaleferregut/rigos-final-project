import React, { Component } from 'react';
import About from './about-me.js';
import Contact from './contact-form';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { List, ListItem } from 'material-ui/List';
import ContentCreate from 'material-ui/svg-icons/content/create';
import LibraryBooks from 'material-ui/svg-icons/av/library-books';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import ContentAddBox from 'material-ui/svg-icons/content/add-box';

import '../services.css'

export default class Services extends Component {
  constructor() {
    super()
    this.state = {
      message: 'U mad Bro'
    }
  }

  handleClick(type) {
    let chosenType
    switch (type) {
      case 'read':
        chosenType = 'Reading is fun!!'
        break
      case 'write':
        chosenType = 'Writing is fun!!'
        break
      case 'math':
        chosenType = 'Math is fun!!'
        break
      case 'homework':
        chosenType = 'Homework is fun!!'
        break
    }
    this.setState({
        message: chosenType
    })
  }


  render() {
    return (
      <div className="service_contact">
        <section>
          <div className="top-panel">
            <h2>Services</h2>
          </div>
          <BrowserRouter>
            <div>
              <div className="subjects">
                <List>
                  <ListItem primaryText="Reading" leftIcon={<LibraryBooks />}
                    onClick={() => this.handleClick('read')} />
                  <ListItem primaryText="Writing" leftIcon={<ContentCreate />}
                    onClick={() => this.handleClick('write')} />
                  <ListItem primaryText="Math" leftIcon={<ContentAddBox />}
                    onClick={() => this.handleClick('math')} />
                  <ListItem primaryText="Homework" leftIcon={<ActionAssignment />}
                    onClick={() => this.handleClick('homework')} />
                </List>
              </div>
              <div className="details">
                <p>{this.state.message}</p>
              </div>
            </div>
          </BrowserRouter>
        </section>
        <About />
        <Contact />
      </div>
    )
  }
}
