import React from 'react';
import { connect } from 'react-redux';
import './css/student-list.css';
import './css/studentrow.css';
import avatar from './css/avatar.png';

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

    let listOfStudentsToBeRendered = this.props.students;

    // console.log('studentList: ', studentList);
    // console.log('filteredStudents: ', filteredStudents);
    // console.log(this.props.filter);
    // console.log('listOfStudentsToBeRendered', listOfStudentsToBeRendered);

    if (this.props.filter === undefined || this.props.filter === 'SELECT PERIOD') {
      listOfStudentsToBeRendered = studentList;
    } else if (this.props.filter !== null) {
      listOfStudentsToBeRendered = filteredStudents;
    }

    return (
      <ul className="student-list">
       {listOfStudentsToBeRendered.map((student, i) => 
          <li className="student-row" key={i}>

            <div className="image-container">
              <div className="student-info">
                <h2>{student.firstname} {student.lastname}</h2>
                <h3>STUDENT ID: {student.id}</h3>
              </div>
              <img role="presentation" src={avatar} alt="avatarIcon" className="avatar-img" />
            </div>

          <div className="right-box">
            <div className="period-select-container">
              <select htmlFor="periodselect" className="period-select" name="select" onChange={(e, id) => this.onChange(e, student.id)}>
                <option>SELECT PERIOD</option>
                {this.props.periods.map((period, i) => <option key={i} value={period.id}>{period.name}</option>)}
              </select>
            </div>

            <div className="list-of-students-periods">
                {this.removeDuplicates(student.periodNames).map((period, i) => <p key={i}> {period} </p>)}
            </div>
          </div>

          </li>)}
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


