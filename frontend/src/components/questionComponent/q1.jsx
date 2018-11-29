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
     
     const eventPush = event.target.id;  
      if(eventPush === "A"){
        values = "A"
      } else {
        if(eventPush === "B"){
          values = "B"
      } else {
        if(eventPush === "C"){
          values = "C"
      } else {
        if(eventPush === "D"){
          values = "D"
      } else {
        if(eventPush === "E"){
          values = "E"
      }
      }
      }
      }
    }
     event.preventDefault()
    this.setState({ fireRedirect: true, values })
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
          
        {
            JSON.stringify(this.state.values )
            }
        
        {fireRedirect && (<Redirect to={from || '/quiz/q2'}/>
        )}
        
</div>
      );
  }
}

export default Q1;