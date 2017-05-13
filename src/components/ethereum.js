import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import GlobalHeader from './globalHeader.js'
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
// import { Field, reduxForm } from 'redux-form';

// Import libraries we need.
import { default as Web3} from 'web3';
import { default as contract } from 'truffle-contract'

// Import our contract artifacts and turn them into usable abstractions.
import metacoin_artifacts from './contracts/MetaCoin.json'

// MetaCoin is our usable abstraction, which we'll use through the code below.
var MetaCoin = contract(metacoin_artifacts);
var accounts;
var account;




class Ethereum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      airtasker: "hello",
      bank: "goodbye"
    }

  }


    generateHash() {
      console.log('generate')
      var self = this;

      var meta;
      MetaCoin.deployed().then(function(instance) {
        meta = instance;
        return meta.getBalance.call(account, {from: account});
      }).then(function(value) {
        var balance_element = document.getElementById("balance");
        balance_element.innerHTML = value.valueOf();
      }).catch(function(e) {
        console.log(e);
        self.setStatus("Error getting balance; see log.");
      });
    }

    storeHash() {
      console.log('store')
      var self = this;

      var amount = parseInt(document.getElementById("amount").value);
      var receiver = document.getElementById("receiver").value;

      this.setStatus("Initiating transaction... (please wait)");

      var meta;
      MetaCoin.deployed().then(function(instance) {
        meta = instance;
        return meta.sendCoin(receiver, amount, {from: account});
      }).then(function() {
        self.setStatus("Transaction complete!");
        self.refreshBalance();
      }).catch(function(e) {
        console.log(e);
        self.setStatus("Error sending coin; see log.");
      });
    }

  verifyHash() {
    console.log('verify')
  }

  handleChange(field, event) {
    var nextState = {};
    nextState[field] = event.target.value;

    this.setState(nextState);
  }

  submitAT() {
    console.log(this.state.airtasker);
  }

  submitBank() {
    console.log(this.state.bank);
  }

  render() {
    return (
      <div>
        <GlobalHeader />
        <h1>ETH</h1>
        <div>
          <p>Airtasker Inputs Hash</p>
          <input type="text" value={this.state.airtasker} onChange={this.handleChange.bind(this, 'airtasker')}/>
          <button onClick={this.submitAT.bind(this)}>Submit</button>
          <p>Result:</p>
        </div>

        <div>
          <p>Bank Verifies Hash</p>
          <input type="text" value={this.state.bank} onChange={this.handleChange.bind(this,"bank")}/>
          <button onClick={this.submitBank.bind(this)}>Submit</button>
          <p>Result</p>
        </div>
      </div>

    )
  }

}


export default Ethereum

//REDUX FORM

// const renderField = ({ input, type }) => (
//     <div>
//       <input {...input} type={type} className="form-control"/>
//     </div>
// );


// <form onSubmit={handleSubmit.bind(this)}  >
//   <label>Name</label>
//   <div className="form-group">
//     <Field
//         className="form-control"
//         name="name"
//         component={renderField}
//         type="text" />
//   </div>
//   <label>Date</label>
//   <div className="form-group">
//     <Field
//         className="form-control"
//         name="date"
//         component={renderField}
//         type="text" />
//   </div>
//   <label>Amount</label>
//   <div className="form-group">
//     <Field
//         className="form-control"
//         name="amount"
//         component="textArea"
//         type="text" />
//   </div>
//   <label>Company</label>
//   <div className="form-group">
//     <Field
//         className="form-control"
//         name="company"
//         component="textArea"
//         type="text" />
//   </div>
//   <div className="row">
//     <div className="col-md-6">
//       <button type="submit" className="btn btn-white btn-block">Submit</button>
//     </div>
//   </div>
// </form>

// Ethereum = reduxForm({
//   form: 'Ethereum',
// })(Ethereum);