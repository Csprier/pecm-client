import React from 'react';
import { connect } from 'react-redux';
import { listAllStudents, getAllPeriods } from '../actions/students';
import Filter from './filter';
import StudentList from './student-list';
import AddStudentToDatabase from './addStudentToDatabase';
import './css/student-list.css';
import './css/user-controls.css';
import { logoutUser } from '../actions/users';

class UserControls extends React.Component {
  componentDidMount() {
    this.props.dispatch(listAllStudents());
    this.props.dispatch(getAllPeriods());
  }

  onClickLogout = () => {
    this.props.dispatch(logoutUser())
    this.props.history.push('/')
  }

  render(){
    return (
      <div className="container" role="region" aria-labelledby="region1">
        <button className="logout-button" onClick={this.onClickLogout}>LogOut</button>
        <div className="teacher-controls">
          <Filter />
          <AddStudentToDatabase />
        </div>
        <div className="student-list-container" role="region" aria-labelledby="region3">
          <StudentList />
        </div>
      </div>
    );
  }
}

export default connect()(UserControls);