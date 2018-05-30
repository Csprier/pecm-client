import React from 'react';
import { connect } from 'react-redux';
import StudentRow from './studentrow';
import './css/student-list.css';

class StudentList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className="student-list">
       {this.props.students.map(student => 
          <StudentRow 
            key={student.id}
            id={student.id}
            firstname={student.firstname} 
            lastname={student.lastname} 
          />)}
      </ul>
    );
  }
}

// state . student(reducer) .students(array)
const mapStateToProps = state => ({
  students: state.student.students
});

export default connect(mapStateToProps)(StudentList);