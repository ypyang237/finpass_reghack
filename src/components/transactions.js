import React, { Component } from 'react';
import GlobalHeader from './globalHeader.js';
import { Grid, Row, Col } from 'react-bootstrap';
class Transactions extends Component {

  render() {
    return (
      <div>
        <GlobalHeader />
        <Grid>
          <Row className="show-grid">
            <Col sm={6} md={3} >
              <p>SOURCE</p>
            </Col>

            <Col sm={6} md={3}>
              <p>AMOUNT</p>
            </Col>


            <Col sm={6} md={3}>
              <p>DATE</p>
            </Col>

            <Col sm={6} md={3}>
              <p>CONFIRMATION</p>
            </Col>
          </Row>
       </Grid>
    </div>
  )}
}


export default Transactions;


// <a type="button" className="btn btn-info btn-block" href={'#'}>
//   Confirm
// </a>
