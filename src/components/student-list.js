import React from 'react';
import { connect } from 'react-redux';
import './css/student-list.css';
import './css/studentrow.css';

import { assignPeriodToStudent } from '../actions/students';

class StudentList extends React.Component {
  makePeriodArrayObject(periods, periodNames) {
    const periodObject = {};
    // Go through the array, forEach value in it, Assign it to a key in an object I've created
    periods.forEach((period) => periodObject[period] = true);
    return periodObject;
  }

  onChange(e) {
    // let studentPeriodNames = this.props.students.map(student => student.periodNames);
    // const periodList = this.props.periods.map(period => period.name);
    // console.log(studentPeriodNames);
    // console.log(periodList)
    this.props.dispatch(assignPeriodToStudent(this.props.students.id, e.target.value))
  }

  render() {
    // let studentPeriodNames = this.props.students.map(student => student.periodNames);
    // const periodList = this.props.periods.map(period => period.name);

    // console.log(studentPeriodNames);
    // console.log(periodList)
    console.log('s', this.props.students)
    // console.log('p', this.props.periods);
      return (
      <ul className="student-list">
       {this.props.students.map((student, i) => 
          <li className="student-row" key={i}>
            {student.firstname} {student.lastname}<br/> 
            STUDENT ID: {student.id}
            <select name="select" onChange={(e) => this.onChange(e)}>
              <option>SELECT PERIOD</option>
              {this.props.periods.map(period => {
                return (<option key={period.name} value={period.id}>{period.name}</option>)
              })}
            </select>
            {student.periodNames.map((period, i) => <p key={i}> {period} </p>)}
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

