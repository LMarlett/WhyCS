import React, { Component } from 'react';
import '../pages/pages.css';
import Header from '../components/headerComponent/header';
import { Card,CardImg,CardText,CardBody,CardTitle,CardSubtitle, NavLink,FormGroup,Label,Input,Button,Row,Col,Container } from 'reactstrap';
//import { AvForm, AvField } from '..availity-reactstrap-validation';
 
class QuizStart extends Component {
  render() {
    return (
      <div>
      <Header />
      <br/><br/>
      <Row>
      <Col Col sm="12" md={{ size: 8, offset: 2 }}>
      <Card body className="text-center" inverse style={{borderColor: 'white' }}> 
        <CardTitle><div className="thirdText">WhyCS Quiz</div></CardTitle>
        <br/>
        <CardText>
          <div className="textCenter">Lorem ipsum dolor sit amet, consectetur 
             adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
           veniam, quiepakis nostrud exercitation ullamco laboris nsi ut aliquip ex 
           ea comepmodo consetquat.    
          </div>
          <div className="textCenter">Select a choice that means more to you</div>
        </CardText>
        <br/><br/><br/>
        <FormGroup className="intake-form">
          <div>
            <Label for="zip">Zip</Label>
            <Input type="text" name="zip" placeHolder="00000"/>
          </div>
          <div>
            <Label for="career">Career Field</Label>
            <Input type="text" name="career"/>
          </div>
          <div className="gender"><Label>Gender</Label></div>
          <br></br>
          <div className="radio"><Label check><Input type="radio" name="radio1" />{' '}Female</Label></div>
          <div className="radio"><Label check><Input type="radio" name="radio2" />{' '}Male</Label></div>
          <div className="radio"><Label check><Input type="radio" name="radio3" />{' '}Other</Label></div>
          <div><Label for="ageSelect">Age Range</Label>
          <Input type="select" name="select">
            <option>18 or less</option>
            <option>19-25</option>
            <option>26-35</option>
            <option>36-45</option>
            <option>46-55</option>
            <option>55+</option>
          </Input>
          </div>
        </FormGroup>  
        <NavLink href="/whycsquiz">
        <Button outline color="secondary">Start Quiz</Button>
        </NavLink>
      </Card>
     </Col>
    </Row>
  </div>
  );
  }
}

export default QuizStart;
