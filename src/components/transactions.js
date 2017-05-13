import React, { Component } from 'react';
import GlobalHeader from './globalHeader.js';
import { Grid, Row, Col } from 'react-bootstrap';
import transactions from './source/transactions'
var transactionslist = transactions;
class Transactions extends Component {
  confirm(id) {
    transactionslist = transactionslist.map(function(el){
      if(el.id === id){
        el.status = "confirmed";
      }
      return el;
    });
  }
  render() {
    var that = this;
    var table = transactionslist.map(function(e){
      return (
        <Row className="show-grid">
            <Col sm={6} md={3} >
              <p>{e.source}</p>
            </Col>
            <Col sm={6} md={3}>
              <p>${e.amount}</p>
            </Col>
            <Col sm={6} md={3}>
              <p>{e.date}</p>
            </Col>
            <Col sm={6} md={3}>
              {e.status === "confirmed" ?
                <a type="button" onClick={that.confirm.bind(that, e.id)} className="btn btn-info btn-block" href={'#'}>
                  Confirm
                </a>
              :
                <img style={{height: "40px"}} src={"/assets/tick.png"}></img>
              }
            </Col>
        </Row>
      )
    })
    return (
      <div>
        <GlobalHeader />
        <Grid>
          <Row className="show-grid" style={{fontWeight: "bold"}}>
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
