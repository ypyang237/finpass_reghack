import React, { Component } from 'react';
import GlobalHeader from './globalHeader.js';
import { Grid, Row, Col } from 'react-bootstrap';

class Transactions extends Component {
  render() {
    var companies = ["AirTasker", "Uber", "Upwork", "AirBnB", "Deliveroo"]
    var dates = ["17/05/2017", "16/05/2017", "15/05/2017", "14/05/2017"]

    var transactions = [];

    for (var i = 0; i < 20; i++ ){
      transactions.push({
        source: companies[Math.floor(Math.random()*companies.length)],
        amount: Math.floor(Math.random()*100),
        date: dates[Math.floor(Math.random()*dates.length)]
      })
    }

    var table = transactions.map(function(e){
      return (
        <Row className="show-grid">
            <Col sm={6} md={3} >
              <p>{e.source}</p>
            </Col>

            <Col sm={6} md={3}>
              <p>{e.amount}</p>
            </Col>


            <Col sm={6} md={3}>
              <p>{e.date}</p>
            </Col>

            <Col sm={6} md={3}>
              <a type="button" className="btn btn-info btn-block" href={'#'}>
                Confirm
              </a>
            </Col>
        </Row>
      )
    })

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
          {table}
       </Grid>
    </div>
  )}
}


export default Transactions;


// <a type="button" className="btn btn-info btn-block" href={'#'}>
//   Confirm
// </a>
