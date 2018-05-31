import { API_BASE_URL } from '../config';

export const GET_ALL_STUDENTS = 'GET_ALL_STUDENTS';
export const getAllStudents = (students) => ({
  type: GET_ALL_STUDENTS,
  students
});

export const listAllStudents = () => dispatch => {
  return fetch(`${API_BASE_URL}/api/students`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify()
  })
  .then(res => res.json())
  .then(json => dispatch(getAllStudents(json))) // pass in json to pass in the data
  .catch(err => console.error(err));
}

export const PERIOD_ASSIGNMENT = 'PERIOD_ASSIGNMENT';
export const periodAssignment = (student, period) => ({
  type: PERIOD_ASSIGNMENT,
  student,
  period
});

export const assignPeriodToStudent = () => dispatch => {
  return fetch(`${API_BASE_URL}/api/:id/periods`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify()
  })
  .then(res => res.json())
  .then(json => dispatch(periodAssignment(json)))
  .catch(err => console.error(err));
}
