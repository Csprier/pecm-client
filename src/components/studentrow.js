import React from 'react';
import './css/studentrow.css';

export default function StudentRow(props) {
  console.log(props);
  return (
    <li className="student-row">
      {props.firstname} {props.lastname}<br/> 
      ID: {props.id}
    </li>
  );
}