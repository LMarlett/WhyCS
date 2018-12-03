import React, { Component } from 'react'
import Header from '../components/headerComponent/header'
import './pages.css'
import Footer from '../components/footerComponent/footer';

class Resources extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="resources">
        <h4>WhyCS Unplugged Resources</h4>
        <h3>Do WhyCS with your colleagues!</h3>
        <p>It’s fun to take this little quiz and see the results, but to really inform your work, take it one step further - hold a conversation with your colleagues to learn more about what values you share, and where you might see things differently.</p>
        <p>If you’re a district leader, principal, teacher, researcher or designer interested in CD education, you can use the resources below to go through an ‘unplugged’ WhyCS activity, and think through how your values can shape the choices you make around CS education.</p>
        <p>WhyCS Unplugged resources:</p>
        <ul>
          <li>WhyCS activity slide deck ADD LINK</li>
          <li>WhyCS statements (handout version) ADD LINK</li>
          <li>WhyCS statements (card version) ADD LINK</li>
        </ul>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Resources
