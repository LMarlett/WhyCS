import React, { Component } from 'react';
import '../pages/pages.css';
import Header from '../components/headerComponent/header';
import Footer from '../components/footerComponent/footer';
import CategorySquare from '../components/categorySquare';
import CategoryInformation from '../components/categoryInformation';
import CategoryBlocksHeader from '../components/categoryBlocksHeader';

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
         <div>

          <Header />
          <div className="resultsWrapper">
          <CategoryBlocksHeader />

          <div className="yourResultsWrapper">
            <div className="yourResultsInner">
              <h2>Your Results</h2>
              {/* if else */}
              <CategorySquare />
            </div>
          </div>

          <div className="resultsChart">
          <p>Static content goes here</p>
          </div>
 

          <div className="impactAreas">
            <h2>Learn More About Impact Areas</h2>
          {/* <NavLink href="#">
            <Button outline color="secondary">Learn More About Impact Areas</Button>
          </NavLink> */}
          </div>

          <div>
            <CategoryInformation />
          </div>
          </div>
          <Footer />
 
        </div>
     );
  }
}

export default Profile;