import React, { Component } from 'react'
import Header from '../components/headerComponent/header'
import Footer from '../components/footerComponent/footer'
import './resources.css'

class Resources extends Component {
  render() {
    return (
      <div>
        <Header />
        <h3 className="pageTitle">WhyCS Unplugged Resources</h3>
        <br />
        <h6>Do WhyCS with your colleagues!</h6>

        <br />
        <br />
        <p>
          It’s fun to take this little quiz and see the results, but to really
          inform your work, take it one step further - hold a conversation with
          your colleagues to learn more about what values you share, and where
          you might see things differently. <br />
          <br />
          If you’re a district leader, principal, teacher, researcher or
          designer interested in CD education, you can use the resources below
          to go through an ‘unplugged’ WhyCS activity, and think through how
          your values can shape the choices you make around CS education.
        </p>

        <h6>Resources:</h6>
        <ul>
          <li>Slide Deck</li>
          <li>Cards</li>
          <li>Handouts</li>
        </ul>
        <Footer />
      </div>
    )
  }
}

export default Resources
