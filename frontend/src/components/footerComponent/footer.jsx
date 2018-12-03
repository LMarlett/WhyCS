import React, { Component } from 'react'
import whycsLogo from '../../images/WhyCS-Logo.svg'
import '../../App.css'
import 'bootstrap/dist/css/bootstrap.css'
import './footer.css'
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

class Footer extends Component {
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
        <footer>
          <div>
            <Navbar color="light" light expand="md">
              <NavbarBrand href="/" className="WhyCSLogo">
                <img src={whycsLogo} className="headerLogo" alt="WhyCS Logo" />
              </NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="https://www.csforall.org/">
                      Made by CSforAll Initiatives
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        </footer>
      </div>
    )
  }
}

export default Footer
