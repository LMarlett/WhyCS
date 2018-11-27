import React, { Component } from 'react';
import Header from '../components/headerComponent/header';
import { 
  Card,
  CardImg, 
  CardText, 
  CardBody,
  CardTitle, 
  CardSubtitle, 
  NavLink,
Button,
Row,
Col 
} from 'reactstrap';
import '../pages/pages.css';
 
class QuizStart extends Component {
    render() {
      return (
        <div>
        <Header />
<br/>
<br/>
<Row>
 <Col sm="12">
      <Card body className="text-center" inverse style={{borderColor: 'white' }}> 
        <CardTitle><div className="thirdText">WhyCS Quiz</div></CardTitle>
        <br/>
        <CardText><div className="textCenter">Lorem ipsum dolor sit amet, consectetur 
             adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
           veniam, quiepakis nostrud exercitation ullamco laboris nsi ut aliquip ex 
           ea comepmodo consetquat.    
      </div>
      </CardText>
      <br/><br/><br/>
        <NavLink href="/whycsquiz">
        <Button outline color="secondary">Start Quiz</Button>
        </NavLink>
      </Card>
     </Col>
    </Row>
 
 {/*
 add input for 
 */}
 
 
       </div>
       );
    }
  }
  
 

export default QuizStart;
