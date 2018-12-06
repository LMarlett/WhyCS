import React, { Component } from 'react'
import '../pages/pages.css'
import Header from '../components/headerComponent/header'
import Footer from '../components/footerComponent/footer'
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  NavLink,
  FormGroup,
  Label,
  Input,
  Button,
  Row,
  Col,
  Container
} from 'reactstrap'
import {
  AvForm,
  AvField,
  AvGroup,
  AvInput,
  AvFeedback,
  AvRadioGroup,
  AvRadio
} from 'availity-reactstrap-validation'
import { Redirect } from 'react-router'

class QuizStart extends Component {
  constructor(props) {
    super(props)

    this.handleValidSubmit = this.handleValidSubmit.bind(this)
    this.state = {
      fireRedirect: false
    } 
    //clear local storage
    localStorage.clear();
  }

  handleValidSubmit(event, values) {
     event.preventDefault()
    this.setState({ 
      fireRedirect: true, values })
    localStorage.setItem('inputs', JSON.stringify(values));
       }
 


  render() {
    const { from } = this.props.location.state || '/'

    const { fireRedirect } = this.state

    return (
      <div>


      <Header />



      <div className="aboutWrapper">
       
        <p>We created WhyCS to highlight the importance of core values when it comes to computer science education. Different reasons for teaching computer science aren’t just important so that we can get other people to care about CS, they should also shape what our computer science classes look like - who’s in them, what kinds of things get taught and in what ways. Our values should be expressed in our practice. </p>
          <br /><br />
          <h3 id="center">Please enter some information</h3>
        
         </div>

     
      <Row>
      <Col Col sm="12" md={{ size: 8, offset: 2 }}>
      <Card body className="text-center" inverse style={{borderColor: 'white' }}> 
         
        
        <br/>
       

      <Row> 
      <Col sm="12" md={{ size: 6, offset: 3 }}>
      <AvForm className="text-form" onValidSubmit={this.handleValidSubmit}>
 
             <AvField className="intake-form" name="zip" label="Zip" type="number"  placeHolder="00000" 
             validate={{
               number: true,
               minLength: {value: 5},
               maxLength: {value: 5},
               required: {value: true},

              }}/>
                <p className="small">International participants enter 00000</p>
             <AvField className="intake-form" name="career" label="Career Field" type="text"  errorMessage="Please enter your career type" 
             validate={{
            required: {value: true},
            pattern: {value: '^[A-Za-z0-9]+$'},
            minLength: {value: 3},
            maxLength: {value: 25}
          }} />

            <Label>Gender</Label>
           <AvRadioGroup className="text" inline name="gender"  required>
            <AvRadio label="Female" value="female" />
            <AvRadio label="Male" value="male" />
            <AvRadio label="Other" value="other" />
          </AvRadioGroup>

            <AvField type="select" className="intake-form"  name="ageRange" label="Age Range" validate={{
            required: {value: true}}} helpMessage="Please select an age group">
           
            <option>Select</option>

            <option>18 or less</option>
            <option>19-25</option>
            <option>26-35</option>
            <option>36-45</option>
            <option>46-55</option>
            <option>55+</option>
            </AvField>

          <Button className='btn' outline color="secondary">Start Quiz</Button>      
 
        </AvForm>
        
        </Col>
        </Row>

        </Card>
        </Col>
        </Row>

        {/*JSON.stringify(this.state.values)*/}

        {/* prints out :
        {"zip":"12132","career":"asdasd","gender":"male","select":"19-25"}
         */}

        {fireRedirect && <Redirect to={from || '/quiz/q1'} />}

        {/*
    <NavLink href="/whycsquiz">         </NavLink>
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
       
*/}

        <Footer />
      </div>
    )
  }
}

export default QuizStart
