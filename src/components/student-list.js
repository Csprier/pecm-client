import React from 'react';
import { connect } from 'react-redux';
import './css/student-list.css';
import './css/studentrow.css';
import avatar from './css/avatar.png'

import { assignPeriodToStudent } from '../actions/students';

class StudentList extends React.Component {
  onChange(e, id) {
    this.props.dispatch(assignPeriodToStudent(id, e.target.value))
  }

  removeDuplicates(arr) {
    let uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
      if (uniqueArray.indexOf(arr[i]) === -1 && arr[i] !== undefined) {
        uniqueArray.push(arr[i])
      }
    }
    return uniqueArray;
  }

  render() {
    let studentList = this.props.students;
    let filteredStudents = studentList.filter(student => student.periods.includes(this.props.filter));

    if (this.props.filter !== null) {
      // if the filter is not null, replace the student list with the filtered student list
      console.log(studentList.map(student => student.periods));
      console.log(this.props.filter);
      studentList = filteredStudents;
    }

    return (
      <ul className="student-list">
       {studentList.map((student, i) => 
          <li className="student-row" key={i}>

            <div className="image-container">
              <img src={avatar} alt="avatarIcon" className="avatar-img" />
            </div>

            <div className="student-info">
              <h2>{student.firstname} {student.lastname}</h2>
              <h3>STUDENT ID: {student.id}</h3>
            </div>

            <div className="period-select-container">
              <select className="period-select" name="select" onChange={(e, id) => this.onChange(e, student.id)}>
                <option>SELECT PERIOD</option>
                {this.props.periods.map((period, i) => <option key={i} value={period.id}>{period.name}</option>)}
              </select>
            </div>

            <div className="list-of-students-periods">
              {this.removeDuplicates(student.periodNames).map((period, i) => <p key={i}> {period} </p>)}
            </div>

          </li>
        )
        }
      </ul>
    );
  }
}

// students now has a students.student.periodName array
const mapStateToProps = state => ({
  students: state.student.students.map(student => Object.assign({}, student, {
    periodNames: student.periods.map(period => (state.student.periods[period] || {}).name)
  })),
  periods: Object.values(state.student.periods),
  filter: state.student.filter
});

export default connect(mapStateToProps)(StudentList);


