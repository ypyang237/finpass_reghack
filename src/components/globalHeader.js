import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';


const GlobalHeader = () => (
  <div>
    <header>
      <Navbar fluid fixedTop>
        <Navbar.Brand>
          FINPASS
        </Navbar.Brand>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem href="/">Home</NavItem>
            <NavItem href="/transactions">Transactions</NavItem>
            <NavItem href="/passport">Passport</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>


    <h2>GlobalHeader</h2>
  </div>
)

export default GlobalHeader;