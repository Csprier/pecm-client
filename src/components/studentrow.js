import React from 'react';
import './css/studentrow.css';
import { connect } from 'react-redux';
import { assignPeriodToStudent } from '../actions/students';

class StudentRow extends React.Component {
  constructor(props) {
    super(props);
  }

  periods = [
    {	
      name: "First Period",
      id: "5b10474001c899762b60e6ff"
    },
    {	
      name: "Second Period",
      id: "5b10474001c899762b60e700"
    },
    {
      name: "Third Period",
      id:"5b10474001c899762b60e701"
    },
    {
      name: "Fourth Period",
      id: "5b10474001c899762b60e702"
    },
    {
      name: "Fifth Period",
      id: "5b10474001c899762b60e703"
    },
    {
      name: "Sixth Period",
      id: "5b10474001c899762b60e704"
    },
    {
      name: "Seventh Period",
      id: "5b10474001c899762b60e705"
    },
    {
      name: "Eighth Period",
      id: "5b10474001c899762b60e706"
    },
    {
      name: "Ninth Period",
      id: "5b10474001c899762b60e707"
    }
  ]

  onChange(e) {
    console.log('Period selected');
    console.log(e.target.value);
    this.props.dispatch(assignPeriodToStudent(this.props.id, e.target.value))
  }
  

  // console.log(props);
  render() {
    return (
      <li className="student-row">
        {this.props.firstname} {this.props.lastname}<br/> 
        STUDENT ID: {this.props.id}
        <h5>PERIOD</h5>
        <select name="select" onChange={(e) => this.onChange(e)}>
          {this.periods.map(period => {
            return (<option key={period.name} value={period.id}>{period.name}</option>)
          })}
        </select>
      </li>
    );
  }
}

export default connect()(StudentRow);


// dispatch an action that takes a student and an id
//dropdown goes here, mapstatetoprops to get period in the state