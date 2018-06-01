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

// period_assignment_success
export const PERIOD_ASSIGNMENT = 'PERIOD_ASSIGNMENT';
export const periodAssignment = (data) => ({
  type: PERIOD_ASSIGNMENT,
  data
});

export const assignPeriodToStudent = (id, period) => dispatch => {
  return fetch(`${API_BASE_URL}/api/students/${id}/periods`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ period })
  })
  .then(res => res.json())
  .then(result => {
    console.log('Fetch result:', result);
    dispatch(periodAssignment(result))
  })
  .catch(err => console.error(err));
}


