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
import { Navbar, Nav, NavItem } from 'react-bootstrap';



const FinPassApp = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/transactions">Transactions</Link></li>
        <li><Link to="/passport">Passport</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/transactions" component={Transactions}/>
      <Route path="/passport" component={Passport}/>
    </div>
  </Router>
)
export default FinPassApp