import React, { Component } from 'react';
   
 import '../../App.css'
 import 'bootstrap/dist/css/bootstrap.css';
 import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';


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
<div className="footerText">WhyCS</div>  
<div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">WhyCS</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
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
                <NavLink href="/resources">Resources</NavLink>
              </NavItem>
           
            </Nav>
          </Collapse>
        </Navbar>
      </div>

</footer>
</div>

 

     );
  }
}

export default Footer;
