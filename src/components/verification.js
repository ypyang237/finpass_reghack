import React, { Component } from 'react';
import GlobalHeader from './globalHeader.js';
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';

class Verification extends Component {

  render() {

    function FieldGroup({ id, label, help, ...props }) {
      return (
        <FormGroup controlId={id}>
          <ControlLabel>{label}</ControlLabel>
          <FormControl {...props} />
        </FormGroup>
      );
    }

    return (
      <div>
        <GlobalHeader />
        <div className="contatiner" style={{margin: '0 auto', width: '80%'}}>
          <form>
            <FieldGroup
              id="formControlTo"
              type="text"
              label="To"
              placeholder="to"
            />
            <FieldGroup
              id="formControlsFrom"
              type="text"
              label="From"
              placeholder="from"
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
            <Button type="submit">
              Submit
            </Button>
          </form>
        </div>
    </div>
  )}
}
export default Verification;
