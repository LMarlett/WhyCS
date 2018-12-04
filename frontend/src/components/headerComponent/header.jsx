import React, { Component } from 'react'

import '../../App.css'
import 'bootstrap/dist/css/bootstrap.css'
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
  DropdownItem
} from 'reactstrap'
import './header.css'
import whycsLogo from '../../images/WhyCS-Logo.svg'

class Header extends Component {
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
        <header>
          <div className="clearfix">
          <NavLink href="/home"><img src={whycsLogo} className="headerLogo" alt="WhyCS Logo" /></NavLink>
            <div>
          <Navbar color="navbarColor" light expand="md">
            <NavbarBrand href="/" className="navbarText">
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/home">Home</NavLink>
                </NavItem>
                <p>•</p>
                <NavItem>
                  <NavLink href="/about">About</NavLink>
                </NavItem>
                <p>•</p>
                <NavItem>
                  <NavLink href="/quiz/start">Take the Quiz</NavLink>
                </NavItem>
                <p>•</p>
                <NavItem>
                  <NavLink href="/resources">Unplugged Resources</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
          </div>
        </header>

        
      </div>
    )
  }
}

export default Header
