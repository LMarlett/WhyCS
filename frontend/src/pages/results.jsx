import React, { Component } from 'react';
import Header from '../components/headerComponent/header';
import Footer from '../components/footerComponent/footer';
import '../pages/pages.css';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, NavLink, Button, Row, Col } from 'reactstrap';
import CategorySquare from '../components/categorySquare';

//to do get all results from db put into the state map thingy 
//or a pie graph chart

 class Profile extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
         <div className="resultsWrapper">
          <Header />
          <div className="categoryBlocks_wrapper">
            <div className="categoryBlock" id="blue">
              <p>Economic & Workforce Development</p>
            </div>
            <div className="categoryBlock" id="green">
              <p>Citizenship & Civic Engagement</p>
            </div>
            <div className="categoryBlock" id="purple">
              <p>Competencies & Literacies</p>
            </div>
            <div className="categoryBlock" id="pink">
              <p>Technological, Social & Scientific Innovation</p>
            </div>
            <div className="categoryBlock" id="red">
              <p>Equity & Social Justice</p>
            </div>
            <div className="categoryBlock" id="orange">
              <p>School Reform & Improvement</p>
            </div>
            <div className="categoryBlock" id="yellow">
              <p>Personal Agency, Joy & Fulfillment</p>
            </div>
          </div>

          <div className="yourResults">
            <h1>Your Results</h1>
            {/* if else */}
            <CategorySquare />
          </div>
          <NavLink href="/quiz/start">
            <Button outline color="secondary">Take the Quiz</Button>
          </NavLink>

          <Footer />
        </div>
     );
  }
}

export default Profile;