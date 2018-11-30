import React, { Component } from 'react';
import Header from '../headerComponent/header';
import './questions.css';
import { Card,CardImg,CardText,CardBody,CardTitle,CardSubtitle, NavLink,FormGroup,Label,Input,Button,Row,Col,Container } from 'reactstrap';
import { AvForm, AvField, AvGroup, AvInput, AvFeedback, AvRadioGroup, AvRadio } from 'availity-reactstrap-validation';
import { Redirect } from 'react-router'


 class Q1 extends Component {

  constructor(props) {
    super(props);

    this.handleValidSubmit = this.handleValidSubmit.bind(this);
    this.state = {      
      fireRedirect: false
    };
  }

  handleValidSubmit(event, values) {

    event.preventDefault()
    this.setState({ fireRedirect: true, values })

    const eventPush = event.target.id;  
    if(eventPush === "A"){
      values = "A"
      if(localStorage.getItem('A') === null ){
        localStorage.setItem('A', 1);
       } else {
        var aCount = parseInt(localStorage.getItem('A'));
        localStorage.setItem('A', aCount + 1);
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

  alert(values); 
  
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
 
           <Button className='quizbtnL' onClick={this.handleValidSubmit} outline color="secondary" id="A">Lorem ipsum dolor sit amet, consectetur 
             adipisicing elit, sed do eiusmod tempor incididunt ut labore (A)</Button>      
 
           <Button className='quizbtnR btn' onClick={this.handleValidSubmit} outline color="secondary"id="C">Lorem ipsum dolor sit amet, consectetur 
             adipisicing elit, sed do eiusmod tempor incididunt ut labore (C)</Button>      

          </AvForm>
          </Col>
          </Row>
          </Container>
          
              {/*JSON.stringify(this.state.values)*/}

        
        {fireRedirect && (<Redirect to={from || '/quiz/q2'}/>
        )}
        
</div>
      );
  }
}

export default Q1;