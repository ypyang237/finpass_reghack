import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './components/home.js';
import Passport from './components/passport.js';
import Transactions from './components/transactions.js';
// import { Navbar, Nav, NavItem } from 'react-bootstrap';



const FinPassApp = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/transactions" component={Transactions}/>
      <Route path="/passport" component={Passport}/>
    </div>
  </Router>
)
export default FinPassApp