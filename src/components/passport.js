import React, { Component } from 'react';
import GlobalHeader from './globalHeader.js'

const Passport = ({}) => (
  <div>
    <GlobalHeader />
    <div className="col-lg-3 col-md-4 col-sm-6">
    <h2>My Passport</h2>

    <h3>My Loans</h3>
    <div>
      <div>ANZ</div>
      <p>Status: Application Successful</p>
      <p>Approved for: $500,000</p>
    </div>
    <div>
      <div>CBA</div>
      <p>Status: Processing</p>
      <p>Approved for: TBD</p>
    </div>
    <div>
      <div>NAB</div>
      <p>Status: Processing</p>
      <p>Approved for: TBD</p>
    </div>

    <h3>My Verified Income</h3>
    <div>
      <div>
        <h4>This Financial Year (16/17)</h4>
        <p>$60000</p>
      </div>

      <div>
        <h4>Year to Date</h4>
        <p>$55000</p>
      </div>

      <div>
        <h4>Last Financial Year (15/16)</h4>
        <p>$50000</p>
      </div>

      <div>
        <h4>Monthly income</h4>
        <p>January</p>
        <p>$4000</p>
        <p>February</p>
        <p>$5000</p>
        <p>March</p>
        <p>$6000</p>
        <p>April</p>
        <p>$4000</p>
        <p>May</p>
        <p>$3000</p>
      </div>
      </div>
    </div>
  </div>
)

export default Passport;