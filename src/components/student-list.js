import React from 'react';
import { connect } from 'react-redux';
import './css/student-list.css';
import './css/studentrow.css';

import { assignPeriodToStudent } from '../actions/students';

class StudentList extends React.Component {
  onChange(e) {
    this.props.dispatch(assignPeriodToStudent(this.props.students.id, e.target.value))
  }

  render() {
    console.log(this.props);
    return (
      <ul className="student-list">
       {this.props.students.map((student, i) => 
          <li className="student-row" key={i}>
            {student.firstname} {student.lastname}<br/> 
            STUDENT ID: {student.id}
            <select name="select" onChange={(e) => this.onChange(e)}>
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

const mapStateToProps = state => ({
  students: state.student.students.map(student => Object.assign({}, student, {
    periodNames: student.periods.map(period => (state.student.periods[period] || {}).name)
  })),
  periods: Object.values(state.student.periods)
});

export default connect(mapStateToProps)(StudentList);

