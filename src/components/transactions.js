import React, { Component } from 'react';
import GlobalHeader from './globalHeader.js'

const Transactions = () => (
  <div>
    <GlobalHeader />

    <div className="col-lg-3 col-md-4 col-sm-6">
      <div className={`container-fluid`}>

        <div>

          <div className="row">
            <div className="col-sm-12">
              <p>SOURCE</p>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <p>AMOUNT</p>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              <p>DATE</p>
            </div>
          </div>


          <div className="row">
            <div className="col-sm-12">
              <p>CONFIRMATION</p>
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
)


export default Transactions;