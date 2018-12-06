import React, { Component } from 'react';
import '../pages/pages.css';
import Header from '../components/headerComponent/header';
import Footer from '../components/footerComponent/footer';
import CategorySquare from '../components/categorySquare';
import CategoryInformation from '../components/categoryInformation';
import CategoryBlocksHeader from '../components/categoryBlocksHeader';
import {NavLink, Button} from 'reactstrap';
import  BaseButtonExample from '../components/socials';

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


  componentWillUnmount() {
    // fires immediately before component is unmounted
    // from DOM (removed)
    (window).unload(function(){
      localStorage.clear();
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
              <br />

              <CategorySquare />
             
            <p className='text'>---- </p>


            <div className="SocialsContainer">

    <BaseButtonExample />
   </div>

            <a className="btn btn-danger text" role="button" href='cd front#impactAreas' >Learn more about impact areas</a>

             
            </div>
          </div>
              
          <div className="resultsChart">
          <br />
          <p>Static content goes here</p>
          <br />
          <br />
          <br />
          <br />
           <br />
          <br /> 
           <br />
           <br />
           <br />
          <br />          <br />

            <NavLink href="/resources" className="buttonWrapper">
              <Button className="btn btn-danger text" role="button" >Do this with your colleagues</Button>
              </NavLink>

          </div>
 

          <div className="impactAreas" id='impactAreas'>
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