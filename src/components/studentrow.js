import React from 'react';
import './css/studentrow.css';

export default function StudentRow(props) {

  const periods = [
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

  // console.log(props);
  return (
    <li className="student-row">
      {props.firstname} {props.lastname}<br/> 
      ID: {props.id}
      <select name="select">
        {periods.map(period => {
          return (<option value={period.id}>{period.name}</option>)
        })}
      </select>
    </li>
  );
}

const mapStateToProps = state => {

}

// dispatch an action that takes a student and an id
//dropdown goes here, mapstatetoprops to get period in the state