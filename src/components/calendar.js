import React, { Component } from 'react'
import '../calendar.css'

export default class Calendar extends Component {
  render() {
    return(
      <div className="calendar-container">
        <iframe src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showPrint=0&amp;showCalendars=0&amp;height=300&amp;wkst=1&amp;hl=en&amp;bgcolor=%23ffffff&amp;src=rigoberto.gonzaleferregut%40gmail.com&amp;color=%23A32929&amp;ctz=America%2FChicago" width="500" height="300" frameborder="0" scrolling="no"></iframe>
      </div>
    )
  }
}
