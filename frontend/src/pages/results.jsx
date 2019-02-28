import React, { Component } from 'react';
import '../pages/pages.css';
import Header from '../components/headerComponent/header';
import Footer from '../components/footerComponent/footer';
import CategorySquare from '../components/categorySquare';
import CategoryInformation from '../components/categoryInformation';
import CategoryBlocksHeader from '../components/categoryBlocksHeader';
import {NavLink, Button} from 'reactstrap';
import  BaseButtonExample from '../components/socials';
import axios from 'axios';
import blackboard from '../images/whycs_blackboard.jpeg';

import { Redirect } from 'react-router';


var localInstance = axios.create({
  // method: 'post',
  baseURL: 'https://whycs-233104.appspot.com/api/',
 
 headers: {
    "Accept": "application/json",
   "Access-Control-Allow-Origin": "*",
   
    //'Authorization': 'Bearer '+ USER_TOKEN

  }
});

//to do get all results from db put into the state map thingy 
//or a pie graph chart

 class Profile extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      fireRedirect: false,

      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });

  }

  componentWillMount(){

    if (localStorage.inputs === undefined){

      alert("Please start the quiz and complete all answers");
      //refirect to quiz start page
      this.setState({ fireRedirect: true });



  } else {

    var info = JSON.parse(localStorage.getItem('inputs'));

    if (localStorage.getItem('EWD') === null){
      var ewdcount = 0;
    } else {
       ewdcount = parseInt(localStorage.getItem('EWD'));
    }
  
    if (localStorage.getItem('CC') === null){
      var cccount = 0;
    } else {
      cccount = parseInt(localStorage.getItem('CC'));
    }
  
    if (localStorage.getItem('CL') === null){
      var clcount = 0;
    } else {
     clcount = parseInt(localStorage.getItem('CL'));
    }

    if (localStorage.getItem('TSS') === null){
      var tsscount = 0;
    } else {
     tsscount = parseInt(localStorage.getItem('TSS'));
    }

    if (localStorage.getItem('ESJ') === null){
      var esjcount = 0;
    } else {
     esjcount = parseInt(localStorage.getItem('ESJ'));
    }

    if (localStorage.getItem('SRI') === null){
      var sricount = 0;
    } else {
     sricount = parseInt(localStorage.getItem('SRI'));
    }

    if (localStorage.getItem('PAJ') === null){
      var pajcount = 0;
    } else {
     pajcount = parseInt(localStorage.getItem('PAJ'));
    }
   

 

 
  
    var check = ewdcount+cccount+clcount+tsscount+esjcount+sricount+pajcount;
    if ((check !== 21)){
      alert("Please start the quiz and complete all answers");
      //refirect to quiz start page
      this.setState({ fireRedirect: true });
    } else {

  

    var zip = info.zip;
    var career = info.career;
    var gender = info.gender;
    var ageRange = info.ageRange;
    var chosenRejected = (localStorage.getItem('chosenRejected'));

    localInstance.post('/user/response', {
      EWD: ewdcount,
      CC: cccount,
      CL: clcount,
      TSS: tsscount,
      ESJ: esjcount,
      SRI: sricount,
      PAJ: pajcount,
      zip: zip,
      careerField: career,
      misc: chosenRejected,
      ageRange: ageRange,
      gender: gender


    })
        .then((response) => {    
          // alert(`Server response: \n${JSON.stringify(response.data)}`);
          // alert(`Server response: \n${JSON.stringify(response.msg)}`);
           
        })
          .catch((error) => {
            // alert(`Error posting \n${error}`);
                    })
        
                    
  }
}
  }
  componentWillUnmount() {
    // fires immediately before component is unmounted
    // from DOM (removed)
       localStorage.clear();
    }

  render() {
    const { from } = this.props.location.state || '/'

    const { fireRedirect } = this.state
    return (
         <div>

          <Header />
          <div className="resultsWrapper">

          <div className="yourResultsWrapper">
            <div className="yourResultsInner">
              <h3>You core values around why we should teach computer science are...</h3>
              <br />
              <p className='text'>---- </p>
              <CategorySquare />
             

            <p className='text'>---- </p>
            <p className='text'>---- </p>

            <div className="SocialsContainer">

    <BaseButtonExample />
   </div>

            <a className="btn btn-danger text" role="button" href='#impactAreas' >Learn more about impact areas</a>

             
            </div>
          </div>
              
          <div className="resultsChart">
          <br />
          <br/>
            <br/>
          <img src={blackboard} className="homeGraphic" alt="WhyCS Blackboard Drawing" />
       
          <br />   <br/>       <br />

            <NavLink href="/resources" className="buttonWrapper">
              <Button className="btn btn-danger text" role="button" >Do this with your colleagues</Button>
              </NavLink>

          </div>
 

          <div className="impactAreas" id='impactAreas'>
            <h2>Learn More About Impact Areas</h2>

            <br/>
            <br/>
            <CategoryBlocksHeader />
<br/>
          {/* <NavLink href="#">
            <Button outline color="secondary">Learn More About Impact Areas</Button>
          </NavLink> */}
          </div>

          <div>
            <CategoryInformation />
          </div>
          </div>
          <Footer />
          {fireRedirect && (<Redirect to={from || '/quiz/start'}/>)} 
        </div>
     );
  }
}

export default Profile;