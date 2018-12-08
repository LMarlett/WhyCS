import React, { Component } from 'react'
import Header from '../components/headerComponent/header'
import './pages.css'
import Footer from '../components/footerComponent/footer';
import { Button } from 'reactstrap';

 import ActivitySlides from '../unpluggedResources/WhyCS Unplugged Activity Slides.pdf';
 import UnpluggedCards from '../unpluggedResources/WhyCS Unplugged Cards download.pdf';
 import VisionsStatments from '../unpluggedResources/WhyCS Visions Statements Handout.pdf';


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
          <li>WhyCS activity slide deck  &nbsp;
          <a className="btn btn-danger" role="button" href={ActivitySlides} download="WhyCS Unplugged Activity Slides">Download</a>
          </li><br/>
          <li>WhyCS statements (handout version)  &nbsp;
          <a className="btn btn-danger" role="button" href={UnpluggedCards} download="WhyCS Unplugged Cards">Download</a>
          </li><br/>
          {/* <li>WhyCS statements (card version)  &nbsp;
          <a className="btn btn-danger" role="button" href={VisionsStatments} download="WhyCS Unplugged Visions Statements Handout">Download</a>
          </li> */}
        </ul>
        </div>

        <br/>
        <br/>
        <br/>

        <Footer />
      </div>
    )
  }
}

export default Resources
