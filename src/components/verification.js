import React, { Component } from 'react';
import GlobalHeader from './globalHeader.js';
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

// import { Field, reduxForm } from 'redux-form';

class Verification extends Component {


  render() {
    function FieldGroup({ id, label, help, ...props }) {
      return (
        <FormGroup role="form">
          <ControlLabel>{label}</ControlLabel>
          <FormControl {...props} />
        </FormGroup>
      );
    }

    return (
      <div>
        <GlobalHeader />
        <div className="contatiner" style={{margin: '0 auto', width: '80%'}}>
          <form onSubmit={this.handleSubmit}>
            <FieldGroup
              id="formControlName"
              type="text"
              label="Name"
              placeholder="name"
            />
            <FieldGroup
              id="formControlsAmount"
              type="number"
              label="Dollar Value"
              placeholder="amount"
            />
            <FieldGroup
              id="formControlsHash"
              label="Hash"
              type="password"
            />
            <FieldGroup
              id="formControlsPdf"
              type="file"
              label="Pdf"
            />
            <Button className="btn btn-primary btn-large centerButton" type="submit">
              Submit
            </Button>
          </form>
        </div>
    </div>
  )}
}
export default Verification;
