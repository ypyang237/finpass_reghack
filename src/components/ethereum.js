import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import GlobalHeader from './globalHeader.js'
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

import { default as Web3} from 'web3';
import { default as contract } from 'truffle-contract'

import metacoin_artifacts from './contracts/MetaCoin.json'

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
      airtasker: "#142312324134May2017$5000Airtasker",
      bank: "#142312324134May2017$5000Airtasker",
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
      return meta.generateHash(that.state.airtasker, {from: account});
    }).then(function(value) {

      MetaCoin.deployed().then(function(instance) {
        meta = instance;
        return meta.storeHash(value, {from: account});
      }).then(function(value) {
        that.setState({generated: "Generated Hash!"})
      }).catch(function(e) {
        console.log(e);
      });

      // that.setState({generated: "Generated Hash!"})
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
      return meta.verifyHash.call(that.state.bank, {from: account});
    }).then(function(value) {
      console.log('value', value);
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
    function FieldGroup({ id, label, help, ...props }) {
      return (
        <FormGroup role="form">
          <ControlLabel style={{padding: '5px', fontSize: '23px'}}>{label}</ControlLabel>
          <FormControl {...props} />
        </FormGroup>
      );
    }

    return (
      <div>
        <GlobalHeader />
        <h1 style={{marginTop: '25px',marginBottom: '25px', textAlign: 'center', color: '#0F3D5C'}}>TRANSACTION VERIFICATION</h1>
        <div className="contatiner" style={{margin: '0 auto', width: '80%', padding: '10px'}}>
          <form onSubmit={this.handleSubmit}>
            <div style={{padding: '20px'}}>
              <FieldGroup
                id="formControlAir"
                type="text"
                label="Information from Airtasker"
                placeholder="hash"
                value={this.state.airtasker}
                onChange={this.handleChange.bind(this, 'airtasker')}
              />
              <p style={{fontWeight: '900'}}>Result: <span style={{color: 'red', fontSize: '20px'}}>{this.state.generated}</span></p>
              <Button className="btn btn-primary btn-large centerButton" style={{padding: '5px'}} onClick={this.submitAT.bind(this)}>
                Submit
              </Button>
            </div>
            <div style={{padding: '20px'}}>
              <FieldGroup
                id="formControlsBank"
                type="text"
                label="Lender Verifies Hash"
                placeholder="hash"
                value={this.state.bank}
                onChange={this.handleChange.bind(this,"bank")}
              />
              <p>Result: <span style={{color: 'green', fontSize: '20px'}}>{this.state.verified}</span></p>
              <Button className="btn btn-primary btn-large centerButton" onClick={this.submitBank.bind(this)}>
                Submit
              </Button>
            </div>
          </form>

        </div>
    </div>

    )
  }

}

export default Ethereum

