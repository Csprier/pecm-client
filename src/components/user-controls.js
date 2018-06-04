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
    // console.log('Selected Period\'s ID: ', e.target.value);
    console.log('filterStudentsByPeriod: ', this.props.students.filter(student => student.periods.includes(e.target.value)))
    // let filteredArray = this.props.students.filter(student => student.periods.includes(e.target.value))
    this.props.dispatch(filterStudentSuccess(e.target.value))
  }

  

  render(){
    return (
      <div className="app-container">
        <h1>User Controls</h1>
        <div className="period-filter-select-container">
          <h5>Filter Students by Period</h5>
            <select className="period-filter-select" name="select" onChange={(e) => this.filterStudentsByPeriod(e)}>
              <option>SELECT PERIOD</option>
              {this.props.periods.map((period, i) => <option key={i} value={period.id}>{period.name}</option>)}
            </select>
          </div>

        <div className="student-list-container">
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

// students: state.student.students.map(student => Object.assign({}, student, {
//   periodNames: student.periods.map(period => (state.student.periods[period] || {}).name)
// })),