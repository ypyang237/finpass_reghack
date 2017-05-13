import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';


const Home = () => (
  <div>
    <header>
      <Navbar fluid fixedTop>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem href="/transactions">Transactions</NavItem>
          </Nav>
          <Navbar.Form pullRight>
            <NavItem href="/passport">Passport</NavItem>
          </Navbar.Form>
        </Navbar.Collapse>
      </Navbar>
    </header>


    <h2>Home</h2>
  </div>
)

export default Home;