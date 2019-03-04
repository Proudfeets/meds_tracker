import React, {Component} from 'react';

const LandingPage = props => {
  return(
    <div>
    <h1> Welcome to MedsTracker</h1>
    <div className="button-group">
      <a href="/medications" className="button">Add a Prescription</a>
      <a href="/prescriptions" className="button">See Medications</a>
  </div>
    </div>
  )
}



export default LandingPage;
