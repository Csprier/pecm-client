import React from 'react';
import { connect } from 'react-redux';
import { listAllStudents, getAllPeriods } from '../actions/students';
import { filterStudentSuccess } from '../actions/users';
import StudentList from './student-list';
import './css/student-list.css';
import './css/user-controls.css';

class UserControls extends React.Component {
  componentDidMount() {
    this.props.dispatch(listAllStudents());
    this.props.dispatch(getAllPeriods());
  }
  
  filterStudentsByPeriod(e) {
    this.props.dispatch(filterStudentSuccess(e.target.value))
  }

  render(){
    return (
      <div className="app-container" role="region" aria-labelledby="region1">
        <header role="banner">
          <h1>|| Teacher's Controls ||</h1>
        </header>

        <div className="period-filter-select-container" role="region" aria-labelledby="region2">
          <h5>Filter Students by Period</h5>
          <select htmlFor="periodfilterselect"className="period-filter-select" name="select" onChange={(e) => this.filterStudentsByPeriod(e)}>
            <option>SELECT PERIOD</option>
            {this.props.periods.map((period, i) => <option key={i} value={period.id}>{period.name}</option>)}
          </select>
        </div>

        <div className="student-list-container" role="region" aria-labelledby="region3">
          <StudentList />
        </div>
        
      </div>
    );
  }
}

const mapStateToProps = state => ({
  students: state.student.students.map(student => Object.assign({}, student, {
      periodNames: student.periods.map(period => (state.student.periods[period] || {}).name)
    })),
  periods: Object.values(state.student.periods),
  filter: null
});

export default connect(mapStateToProps)(UserControls);