import React from 'react';
import { connect } from 'react-redux'
import { listAllStudents } from '../actions/students';

class UserControls extends React.Component {

  onClick() {
    console.log('GET all Students button clicked!');
    this.props.dispatch(listAllStudents());
  }

  render(){
    return (
      <div>
        <h1>UserControls</h1>
        <button onClick={() => this.onClick()}>GET all Students</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  students: state.students
});

export default connect(mapStateToProps)(UserControls);