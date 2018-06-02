import React from 'react';
import { connect } from 'react-redux';
import { listAllStudents, getAllPeriods } from '../actions/students';
import StudentList from './student-list';

class UserControls extends React.Component {
  componentDidMount() {
    this.props.dispatch(listAllStudents());
    this.props.dispatch(getAllPeriods());
  }
  
  render(){
    return (
      <div>
        <h1>UserControls</h1>
        <div>
          <StudentList />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  // students: state.students
});

export default connect(mapStateToProps)(UserControls);