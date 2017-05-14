import React, { Component } from 'react';
import GlobalHeader from './globalHeader.js'
import { Grid, Row, Col } from 'react-bootstrap';

class Passport extends Component {
  renderApplications(loanData) {
    return loanData.map((application) => {
      return (
        <Row>
          <Col Col sm={2} md={4}><img style={{height: "40px", padding: '5px'}} src={application.lender}></img> </Col>
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
              <Col md={6} mdPush={6} style={{ padding: '5px'}}>
                <h3 style={{padding: '10px', color: '#0F3D5C', fontSize: '25px'}}>My Verified Income</h3>
                <Row  style={{padding: '15px'}}>
                  <Col Col sm={2} md={3}><p style={{fontWeight: '900', padding: '1px', fontSize: '16px'}}>This FY </p> </Col>
                  <Col Col sm={2} md={3}><p style={{fontWeight: '900', padding: '1px', fontSize: '16px'}}>Year to Date</p> </Col>
                  <Col Col sm={2} md={3}><p style={{fontWeight: '900', padding: '1px', fontSize: '16px'}}>Last FY</p> </Col>
                  <Col Col sm={2} md={3}><p style={{fontWeight: '900', padding: '1px', fontSize: '16px'}}>This Month</p> </Col>
                </Row>
                <Row>
                  <Col Col sm={2} md={3}><p style={{ padding: '1px'}}>$60,000</p> </Col>
                  <Col Col sm={2} md={3}><p style={{ padding: '1px'}}>$50,000</p> </Col>
                  <Col Col sm={2} md={3}><p style={{ padding: '1px'}}>$55,000</p> </Col>
                  <Col Col sm={2} md={3}><p style={{ padding: '1px'}}>$4,000</p> </Col>
                </Row>
                <Row>
                  <Col sm={6} md={6}>
                    <img  style={{ marginTop: '10px'}} src="/assets/incomegraph.png"></img>
                  </Col>
                </Row>
              </Col>
              <Col md={6} mdPull={6} style={{ padding: '5px'}}>
                <h3 style={{padding: '10px', color: '#0F3D5C', fontSize: '25px'}}>My Loan Applications</h3>
                <Row style={{fontWeight: "bold", padding: '10px'}}>
                  <Col Col sm={2} md={4}><p style={{fontWeight: '900', padding: '5px', fontSize: '16px'}}>Lenders</p> </Col>
                  <Col Col sm={2} md={4}><p style={{fontWeight: '900', padding: '5px', fontSize: '16px'}}>Status</p> </Col>
                  <Col Col sm={2} md={4}><p style={{fontWeight: '900', padding: '5px', fontSize: '16px'}}>Approved Amount</p> </Col>
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