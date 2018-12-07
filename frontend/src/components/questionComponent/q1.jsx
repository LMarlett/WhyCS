import React, { Component } from 'react';

import Header from '../headerComponent/header';
import './questions.css';
import { Card,CardImg,CardText,CardBody,CardTitle,CardSubtitle, NavLink,FormGroup,Label,Input,Button,Row,Col,Container } from 'reactstrap';
import { AvForm, AvField, AvGroup, AvInput, AvFeedback, AvRadioGroup, AvRadio } from 'availity-reactstrap-validation';
import { Redirect } from 'react-router';
import _ from 'lodash';
import tuples from '../../api/touples';
import quizQuestions from '../../api/csQuestions';

 class Q1 extends Component {

  constructor(props) {
    super(props);

    this.handleValidSubmit = this.handleValidSubmit.bind(this);
    this.state = {      
      fireRedirect: false,
      qA: '',
      qB: '',
      qAid: '',
      qBid: '',
      qAcat: '',
      qBcat: ''

 
    };
  }

  handleValidSubmit(event, values) {

    event.preventDefault()
    this.setState({ fireRedirect: true, values })
    const idA = this.state.qAid;
    const idB = this.state.qBid;

    const eventPush = event.target.id;  
    
    if(eventPush === "EWD"){
      values = "EWD"
      if(localStorage.getItem('EWD') === null ){
        localStorage.setItem('EWD', 1);
        localStorage.setItem('q1Chosen', idA);
        localStorage.setItem('q1Rejected', idB);
       } else {
        var aCount = parseInt(localStorage.getItem('EWD'));
        localStorage.setItem('EWD', aCount + 1);
        localStorage.setItem('q1Chosen', idA);
        localStorage.setItem('q1Rejected', idB);

       }
    } else {
      if(eventPush === "B"){
        values = "B"
        if(localStorage.getItem('B') === null ){
          localStorage.setItem('B', 1);
         } else {
          var bCount = parseInt(localStorage.getItem('B'));
          localStorage.setItem('B', bCount + 1);
         }
    } else {
      if(eventPush === "C"){
        values = "C"
        if(localStorage.getItem('C') === null ){
          localStorage.setItem('C', 1);
         } else {
          var cCount = parseInt(localStorage.getItem('C'));
          localStorage.setItem('C', cCount + 1);
         }
    } else {
      if(eventPush === "D"){
        values = "D"
        if(localStorage.getItem('D') === null ){
          localStorage.setItem('D', 1);
         } else {
          var dCount = parseInt(localStorage.getItem('D'));
          localStorage.setItem('D', dCount + 1);
         }

      } else {
      if(eventPush === "E"){
        values = "E"
        if(localStorage.getItem('E') === null ){
          localStorage.setItem('E', 1);
         } else {
          var eCount = parseInt(localStorage.getItem('E'));
          localStorage.setItem('E', eCount + 1);
         }
      } else {
        if(eventPush === "F"){
          values = "F"
          if(localStorage.getItem('F') === null ){
            localStorage.setItem('F', 1);
           } else {
            var fCount = parseInt(localStorage.getItem('F'));
            localStorage.setItem('F', fCount + 1);
           }
        }
    }
    }
    }
    }
  }

  alert(values + idA); 
  


 
  }
 
  componentWillMount() {
    const Q11 = tuples[0][0][0].qText;
    const Q11ID = tuples[0][0][0].catID;

    const printQ12 = tuples[0][1][0].qText;
    const printQ12ID = tuples[0][1][0].catID;

     alert(Q11 + Q11ID + printQ12 + printQ12ID);
    const shuffledQ = _.shuffle(quizQuestions[0].questions);
   //alert(shuffledQ[0].qText);
    
   
       
    this.setState({
       qA: tuples[0][0][0].qText,
      qAcat: tuples[0][0][0].catID,
        qAid: tuples[0][0][0].qID,
        qB: tuples[0][1][0].qText,
        qBcat: tuples[0][1][0].catID,
          qBid: tuples[0][1][0].qID
          
     });
// alert(this.state.answerOptions);
  }

 
  

 

  


  render() {

    const { from } = this.props.location.state || '/'

    const { fireRedirect } = this.state

    return (
         <div>
          <Header /> 

          <hr/>
          <br />
          <br />
          <Container>
          <Row>
          <Col sm="12" md={{ size: 10, offset: 1 }}>
      
           <AvForm className="text-form" >
           {/* button left */}
            <div className="quizbtnL" onClick={this.handleValidSubmit} outline color="secondary" id={this.state.qAcat}>
              <p className="quizbtnHeader">"We should teach Computer Science because..."</p>
              <p className="quizbtnStatement">{this.state.qA + this.state.qAid}</p>
            </div>
            {/* button right */}
            <div className="quizbtnR" onClick={this.handleValidSubmit} outline color="secondary"id={this.state.qBcat}>
              <p className="quizbtnHeader">"We should teach Computer Science because..."</p>
              <p className="quizbtnStatement">{this.state.qB + this.state.qBid}</p>
            </div>    
          </AvForm>
          </Col>
          </Row>
          </Container>
          
              {/*JSON.stringify(this.state.values)*/}
         
        {/* {fireRedirect && (<Redirect to={from || '/quiz/q2'}/>
        )} */}
        
</div>
      );
  }
}

export default Q1;