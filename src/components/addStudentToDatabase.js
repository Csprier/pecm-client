import React from 'react';
import { connect } from 'react-redux';
import './css/addStudentToDatabase.css';

class AddStudentToDatabase extends React.Component {
  render() {
    return (
      <div className="add-student-form-container">
        <h5>Add Student To Database</h5>
      </div>
    );
  }
}

export default connect()(AddStudentToDatabase);