import React, { Component } from 'react';
import '../../App.css'
import 'bootstrap/dist/css/bootstrap.css';
import {
  Navbar,
  NavLink,
    } from 'reactstrap';
    import './footer.css'
    import csLogo from '../../images/cs-logo-2018.svg'

class Footer extends Component {
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

<footer>  
         <Navbar color="light footerBar" light expand="md">
         <p className="footerText">Sponsored by</p>
           <NavLink href="https://www.csforall.org"><img src={csLogo} className="WhyCSLogo" alt="WhyCS Logo" /></NavLink>
           
           
           {/* <NavbarToggler onClick={this.toggle} /> */}
          {/* <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/startwhycsquiz">Take the Quiz</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/resources">Unplugged Resources</NavLink>
              </NavItem>
           
            </Nav>
          </Collapse> */}
        </Navbar>
 
</footer>
</div>

 

     );
  }
}

export default Footer;
