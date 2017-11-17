import React, { Component } from 'react'
import Contact from './CreateContact'
import { BrowserRouter } from 'react-router-dom'
import { List, ListItem } from 'material-ui/List'
import ContentCreate from 'material-ui/svg-icons/content/create'
import LibraryBooks from 'material-ui/svg-icons/av/library-books'
import ActionAssignment from 'material-ui/svg-icons/action/assignment'
import ContentAddBox from 'material-ui/svg-icons/content/add-box'
import '../styles/services.css'



export default class Services extends Component {
  constructor() {
    super()
    this.state = {
      message: 'Click Above for More Info!!!'
    }
  }

  handleClick(type) {
    let chosenType
    switch (type) {
      case 'read':
        chosenType = "In our reading program, struggling readers get individualized support in all areas, focusing on their area of weakness. We focus on Phonemic Awareness, Word Study, Phonics Fluency, Vocabulary, Comprehension. Placement assessment. Individualized learning pathways. One-on-One tutoring. Quarterly benchmark assessments to determine growth and new areas of focus."
        break
      case 'write':
        chosenType = 'Writing can be challenging for students. Here, at Elementary Tutor, we teach the student learn to write from the very beginning. Breaking everything down into smaller parts. Mastering one part at a time is very beneficial to having them write essays accurately.'
        break
      case 'math':
        chosenType = 'Our math program, struggling students get individualized support in all areas, focusing on their grade level content. Placement assessment. Individualized learning pathways. One-on-One tutoring. Quarterly benchmark assessments to determine growth and new areas of focus.'
        break
      case 'homework':
        chosenType = "Homework is a daily routine for many students. However, many students struggle to complete work at home that they didn't finish at school because they simply don't understand. Here at Elementary Tutor, that is no problem, we can help with any type of homework assignment."
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
        <Contact />
      </div>
    )
  }
}
