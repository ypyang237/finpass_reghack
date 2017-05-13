import React, { Component } from 'react';
import GlobalHeader from './globalHeader.js'
import { Grid, Row, Col } from 'react-bootstrap';

class Passport extends Component {
  renderApplications(loanData) {
    return loanData.map((application) => {
      return (
        <Row>
          <Col Col sm={2} md={4}><img style={{height: "40px"}} src={application.lender}></img> </Col>
          <Col Col sm={2} md={4}><p>{application.status}</p> </Col>
          <Col Col sm={2} md={4}><p>{application.amount}</p> </Col>
        </Row>
      )
    })
  }

  render() {
    const loanData = [
      {
        lender: "/assets/ANZ.png",
        status: 'Approved',
        amount: '$500,000'
      },
      {
        lender: "/assets/NAB.png",
        status: 'Pending',
        amount: '$700,000'
      },
      {
        lender: "/assets/Westpac.png",
        status: 'Pending',
        amount: '$300,000'
      },
      {
        lender: "/assets/CBA.png",
        status: 'Approved',
        amount: '$400,000'
      },
      {
        lender: "/assets/ING.png",
        status: 'Pending',
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
                  <Col Col sm={2} md={3}><p>This Financial Year</p> </Col>
                  <Col Col sm={2} md={4}><p>Year to Date</p> </Col>
                  <Col Col sm={2} md={3}><p>Last Financial Year</p> </Col>
                  <Col Col sm={2} md={3}><p>This Month</p> </Col>
                </Row>
                <Row>
                  <Col Col sm={2} md={3}><p>$60,000</p> </Col>
                  <Col Col sm={2} md={3}><p>$50,000</p> </Col>
                  <Col Col sm={2} md={3}><p>$55,000</p> </Col>
                  <Col Col sm={2} md={3}><p>$4,000</p> </Col>
                </Row>
                <Row>
                  <Col sm={6} md={6}>
                    <img src="/assets/incomegraph.png"></img>
                  </Col>
                </Row>
              </Col>
              <Col md={6} mdPull={6}>
                <h3>My Loan Applications</h3>
                <Row style={{fontWeight: "bold"}}>
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