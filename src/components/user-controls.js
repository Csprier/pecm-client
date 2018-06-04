import React from 'react';
import { connect } from 'react-redux';
import { listAllStudents, getAllPeriods } from '../actions/students';
import StudentList from './student-list';
import './css/student-list.css';
import './css/user-controls.css';

class UserControls extends React.Component {
  componentDidMount() {
    this.props.dispatch(listAllStudents());
    this.props.dispatch(getAllPeriods());
  }
  
  render(){
    return (
      <div className="app-container">
        <h1>User Controls</h1>
        <div className="student-list-container">
          <StudentList />
        </div>
      </div>
    );
  }
}

export default connect()(UserControls);