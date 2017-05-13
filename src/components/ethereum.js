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

var web3;
if (typeof web3 !== 'undefined') {
  console.warn("Using web3 detected from external source. If you find that your accounts don't appear or you have 0 MetaCoin, ensure you've configured that source properly. If using MetaMask, see the following link. Feel free to delete this warning. :) http://truffleframework.com/tutorials/truffle-and-metamask")
  // Use Mist/MetaMask's provider
  web3 = new Web3(web3.currentProvider);
} else {
  console.warn("No web3 detected. Falling back to http://localhost:8545. You should remove this fallback when you deploy live, as it's inherently insecure. Consider switching to Metamask for development. More info here: http://truffleframework.com/tutorials/truffle-and-metamask");
  // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

MetaCoin.setProvider(web3.currentProvider);

web3.eth.getAccounts(function(err, accs) {
  if (err != null) {
    alert("There was an error fetching your accounts.");
    return;
  }

  if (accs.length == 0) {
    alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
    return;
  }

  accounts = accs;
  account = accounts[0];

});

class Ethereum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      airtasker: "Jane4May2017$5000Airtasker",
      bank: "Jane4May2017$5000Airtasker",
      generated: "",
      verified: ""
    }

  }


  storeHash() {
    var that = this;
    console.log('store')

    var meta;
    MetaCoin.deployed().then(function(instance) {
      meta = instance;
      return meta.storeHash(that.state.airtasker, {from: account});
    }).then(function(value) {
      that.setState({generated: "Generated Hash!"})
    }).catch(function(e) {
      console.log(e);
    });
  }

  verifyHash() {
    var that = this;
    console.log('verify')

    var meta;
    MetaCoin.deployed().then(function(instance) {
      meta = instance;
      return meta.storeHash(that.state.bank, {from: account});
    }).then(function(value) {
      that.setState({verified: "Verified!"})
    }).catch(function(e) {
      console.log(e);
    });
  }

  handleChange(field, event) {
    var nextState = {};
    nextState[field] = event.target.value;

    this.setState(nextState);
  }

  submitAT() {
    this.storeHash();
  }

  submitBank() {
    this.verifyHash();
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
          <p>Result: {this.state.generated}</p>
        </div>

        <div>
          <p>Bank Verifies Hash</p>
          <input type="text" value={this.state.bank} onChange={this.handleChange.bind(this,"bank")}/>
          <button onClick={this.submitBank.bind(this)}>Submit</button>
          <p>Result: {this.state.verified}</p>
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