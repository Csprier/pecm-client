import React from 'react';
import { connect } from 'react-redux';
import { toggleModal } from '../actions/users';
import './css/onboarding.css'

export class Onboarding extends React.Component {
  render() {
    return (
      <div className="modal-position">
        <button type='button' name='modal-btn' onClick={() => this.props.dispatch(toggleModal())}>What is this App?</button>
          <div className={`modal ${this.props.modalView ? 'visible' : ''}`}>
            <div className="modal-content">
              <h1>Welcome to PECM! (Physical Education Class Manager)</h1>

              <p>This is a tool teachers can use on their mobile devices to help organize daily class scheduling. </p>

              <p>Create an account! Upon creation, you will be automatically logged in.</p>

              <p>If you already have an account, simply log in!</p>

              <p>You will be presented with a database full of students. From there, you have the option to filter by period via the dropdown select menu to see the students in a specified period, or to assign a period to a specific student via the student's individual dropdown select menu to add them to a period.</p>
              
              <button type='button' name='modal-btn' onClick={() => this.props.dispatch(toggleModal())}>CLOSE</button>
            </div>
          </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  modalView: state.user.modalView
})

export default connect(mapStateToProps)(Onboarding);
