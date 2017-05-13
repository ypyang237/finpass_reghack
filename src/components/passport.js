import React, { Component } from 'react';
import GlobalHeader from './globalHeader.js'
import { Grid, Row, Col } from 'react-bootstrap';

class Passport extends Component {


  renderApplications(loanData) {
    return loanData.map((application) => {
      return (
        <Row>
          <Col Col sm={2} md={4}><p>{application.lender}</p> </Col>
          <Col Col sm={2} md={4}><p>{application.status}</p> </Col>
          <Col Col sm={2} md={4}><p>{application.amount}</p> </Col>
        </Row>
      )
    })
  }

  render() {
    const loanData = [
      {
        lender: 'ANZ',
        status: 'approved',
        amount: '$500,000'
      },
      {
        lender: 'NAB',
        status: 'pending',
        amount: '$700,000'
      },
      {
        lender: 'WESTPAC',
        status: 'pending',
        amount: '$300,000'
      },
      {
        lender: 'CBA',
        status: 'approved',
        amount: '$400,000'
      },
      {
        lender: 'ING',
        status: 'pending',
        amount: '$600,000'
      }
    ];

    return (
      <div>
        <GlobalHeader />
        <div>
          <Grid fluid={true}>
            <Row className="show-grid">
              <Col md={6} mdPush={6}>
                <h3>My Verified Income</h3>
                <Row>
                  <Col Col sm={2} md={3}><p>This Financial Year (16/17)</p> </Col>
                  <Col Col sm={2} md={3}><p>Year to Date</p> </Col>
                  <Col Col sm={2} md={3}><p>Last Financial Year (15/16)</p> </Col>
                  <Col Col sm={2} md={3}><p>This Month</p> </Col>
                </Row>
                <Row>
                  <Col Col sm={2} md={3}><p>$60,000</p> </Col>
                  <Col Col sm={2} md={3}><p>$50,000</p> </Col>
                  <Col Col sm={2} md={3}><p>$55,000</p> </Col>
                  <Col Col sm={2} md={3}><p>$4,000</p> </Col>
                </Row>

              </Col>
              <Col md={6} mdPull={6}>
                <h3>My Loan Applications</h3>
                <Row>
                  <Col Col sm={2} md={4}><p>Lenders</p> </Col>
                  <Col Col sm={2} md={4}><p>Status</p> </Col>
                  <Col Col sm={2} md={4}><p>Approved Amount</p> </Col>
                </Row>
                  {this.renderApplications(loanData)}
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    )
  }
}


export default Passport;