import React, { Component } from 'react'
import '../styles/aboutme.css'

export default class About extends Component {
  render() {
    return(
      <div className="about-container">
        <div className="about_me">
          <h1>About Me</h1>
          <div className="about-text">
            <div className="backskyblue">
              <div className="backwhite">
                <p>
                Hi and welcome! My name is Nora, I am a wife, mother, and educator. I have a bachelors degree in elementary education and I am certified in Arizona, Texas, and Florida. I have a masters in educational leadership. In the past eight years, I have taught kindergarten, third, fourth, fifth,and sixth grade. I enjoy working with children and my goal is to help all children reach their max potential. About a year ago, my daughter, started struggling with reading and math. At the time, we lived in Arizona, a state that does not allow a student to be promoted to fourth grade if they do not pass the AZMerit. As the concerned parent I was, I
                focused on her reading in order to help her improve. She went from low approaches in reading to a high meets. Which is amazing, but, using all the I know I was able to help her ahcieve this gap. I am hoping to help other children with academic struggles, and I look forward to seeing their faces when they see all their accomplishments throughout the year.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
