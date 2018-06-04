import React from 'react';
import { connect } from 'react-redux';
import './css/student-list.css';
import './css/studentrow.css';

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
    return (
      <ul className="student-list">
       {this.props.students.map((student, i) => 
          <li className="student-row" key={i}>
            {student.firstname} {student.lastname}<br/> 
            STUDENT ID: {student.id}
            <select name="select" onChange={(e, id) => this.onChange(e, student.id)}>
              <option>SELECT PERIOD</option>
              {this.props.periods.map(period => {
                return (<option key={period.name} value={period.id}>{period.name}</option>)
              })}
            </select>
            {this.removeDuplicates(student.periodNames).map((period, i) => <p key={i}> {period} </p>)}
          </li>
        )}
      </ul>
    );
  }
}

// students now has a students.student.periodName array
const mapStateToProps = state => ({
  students: state.student.students.map(student => Object.assign({}, student, {
    periodNames: student.periods.map(period => (state.student.periods[period] || {}).name)
  })),
  periods: Object.values(state.student.periods)
});

export default connect(mapStateToProps)(StudentList);

// let studentPeriodNames = this.props.students.map(student => {
//   return ({
//     studentPeriodNames: this.removeDuplicates(student.periodNames)
//   });
// })