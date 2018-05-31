import React from 'react';
import { connect } from 'react-redux';
import { listAllStudents } from '../actions/students';
import StudentList from './student-list';

class UserControls extends React.Component {
  constructor() {
    super();
    this.state = {
      listStudents: false
    }
  }

  onClick() {
    console.log('GET all Students button clicked!');
    this.props.dispatch(listAllStudents());
    this.setState({
      listStudents: true
    });
  }
  
  render(){
    return (
      <div>
        <h1>UserControls</h1>
        <button onClick={() => this.onClick()}>GET all Students</button>
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