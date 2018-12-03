import React, { Component } from 'react'
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
  Button,
  Row,
  Col
} from 'reactstrap'
import '../pages/pages.css'
import big from '../images/large.png'

class Home extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  render() {
    return (
      <div>
        <Header />

        <div className="homePad">
          <Row>
            <Col sm="6">
              <img src={big} className="homeGraphic" alt="WhyCS Logo" />
            </Col>
            <Col sm="6">
              <Card
                body
                className="text-center"
                inverse
                style={{ borderColor: 'white' }}
              >
                <CardTitle>
                  <div className="titleText">WhyCS?</div>
                </CardTitle>
                <CardText>
                  <div className="secondText">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt
                  </div>
                  <br />
                  <div className="text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quiepakis nostrud
                    exercitation ullamco laboris nsi ut aliquip ex ea comepmodo
                    consetquat.
                    <br /> <br />
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium poeyi doloremque laudantium, totam
                    rem aperiam, eaque ipsa quae apsb illo inventore veritatis
                    et quasi architecto beiatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt.{' '}
                  </div>
                </CardText>
                <br />

                <NavLink href="/quiz/start">
                  <Button outline color="secondary">
                    Take the Quiz
                  </Button>
                </NavLink>
              </Card>
            </Col>
          </Row>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Home
