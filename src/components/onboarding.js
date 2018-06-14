import React from 'react';
import { connect } from 'react-redux';
import './css/onboarding.css'

export class Onboarding extends React.Component {
  render() {
    return (
      <div className="onboarding-content">
        <h2>Welcome to PECM!</h2>
        <h2>(Physical Education Class Manager)</h2>

        <p>This is a tool teachers can use on their mobile devices to help organize daily class scheduling. </p>

        <p>Create an account! Upon creation, you will be automatically logged in.</p>

        <p>If you already have an account, simply log in!</p>

        <p>You will be presented with a database full of students. From there, you have the option to filter by period via the dropdown select menu to see the students in a specified period, or to assign a period to a specific student via the student's individual dropdown select menu to add them to a period.</p>
      </div>
    )
  }
}


export default connect()(Onboarding);
