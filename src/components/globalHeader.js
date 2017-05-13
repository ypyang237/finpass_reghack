import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';


const GlobalHeader = () => (
  <div>
    <header>
      <Navbar fluid fixedTop>
        <Navbar.Brand>
          <img src="/assets/Logo.png"></img>
        </Navbar.Brand>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem href="/">Home</NavItem>
            <NavItem href="/transactions">Transactions</NavItem>
            <NavItem href="/passport">Passport</NavItem>
            <NavItem href="/verification">Verification</NavItem>
            <NavItem href="/ethereum">Ethereum</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>


    <h2>GlobalHeader</h2>
  </div>
)

export default GlobalHeader;