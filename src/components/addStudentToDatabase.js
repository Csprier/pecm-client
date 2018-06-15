import React from 'react';
import { connect } from 'react-redux';
import './css/addStudentToDatabase.css';
import { toggleCreateStudentModal } from '../actions/users';
import AddStudentModal from './addStudentModal';

class AddStudentToDatabase extends React.Component {
  onClick() {
    this.props.dispatch(toggleCreateStudentModal());
  }

  render() {
    return (
      <div className="add-student-form-container">
        <h5>Add Student To Database</h5>
        {
          (this.props.modalView) 
          ? <AddStudentModal /> 
          : <button id="create-student-modal" onClick={() => this.onClick()}>ADD STUDENT</button>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  modalView: state.user.modalView
})

export default connect(mapStateToProps)(AddStudentToDatabase);