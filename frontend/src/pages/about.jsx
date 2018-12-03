import React, { Component } from 'react'
import Header from '../components/headerComponent/header'
import Footer from '../components/footerComponent/footer'
import './about.css'

class About extends Component {
  render() {
    return (
      <div>
        <Header />
        <h3 className="pageTitle">About</h3>
        <br />
        <br />
        <p>
          There are lots of reasons that people think computer science education
          is important.
        </p>
        <br />
        <p>What are yours?</p>

        <blockquote>
          <p>
            Educational plans and projects must have a philosophy... otherwise
            they are at the mercy of every intellectual breeze that happens to
            blow.
          </p>
        </blockquote>

        <cite>– John Dewey, 1938</cite>
        <Footer />
      </div>
    )
  }
}

export default About
