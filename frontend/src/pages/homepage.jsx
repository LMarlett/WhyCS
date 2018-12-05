import React, { Component } from 'react';
import Header from '../components/headerComponent/header';
import Footer from '../components/footerComponent/footer';
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
import big from '../images/large.png';
import blackboard from '../images/whycs_blackboard.jpeg';

class Home extends Component {
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
      
      <div className='homePage'>
      <Row>
      <Col sm="6" >
       <img src={blackboard} className="homeGraphic" alt="WhyCS Blackboard Drawing" />
      </Col>
      <Col sm="6">
      <Card body className="homeTextWrapper" inverse> 
        <CardTitle>
          <div className="homePhrase">
            There are lots of reasons that people think computer science education is important. 
          </div>
        </CardTitle>

        <CardText>
          <div className="homeCTA">
            What are yours?
          </div>
        </CardText>

        <NavLink href="/quiz/start" className="buttonWrapper">
        <Button outline color="secondary" className="homeButton">Take the Quiz</Button>
        </NavLink>
        <CardText>
          <div className="homeQuote">
            <p>“Educational plans and projects must have a philosophy... otherwise they are at the mercy of every intellectual breeze that happens to blow."</p>				
            <p className="quoteAuthor">- John Dewey, 1938</p>
          </div>
        </CardText>
      </Card>

          </Col>
    </Row>
    </div>
      <Footer />
        </div>
     );
  }
}

export default Home;
