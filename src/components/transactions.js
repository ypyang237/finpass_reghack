import React, { Component } from 'react';
import GlobalHeader from './globalHeader.js'

class Transactions extends Component {

  render() {
    return (
     <div>
      <GlobalHeader />
      <div className="col-lg-3 col-md-4 col-sm-6">
        <div className={`container-fluid`}>
          <div>
            <div className="row">
              <div className="col-sm-12">
                <p>SOURCE</p>
                <p>AirTasker</p>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12">
                <p>AMOUNT: $40</p>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12">
                <p>DATE: 17/05/2017</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className={`col-sm-6`}>
              <a type="button" className="btn btn-info btn-block" href={'#'}>
                Confirm
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  )}
}


export default Transactions;