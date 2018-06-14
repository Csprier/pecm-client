import React from 'react';
import { connect } from 'react-redux';
import { listAllStudents, getAllPeriods } from '../actions/students';
import Filter from './filter';
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
      <div className="app-container" role="region" aria-labelledby="region1">
        <header role="banner">
          <h1>|| Teacher's Controls ||</h1>
        </header>
        <Filter />
        <div className="student-list-container" role="region" aria-labelledby="region3">
          <StudentList />
        </div>
      </div>
    );
  }
}

export default connect()(UserControls);