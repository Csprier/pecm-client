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
  .then(json => dispatch(getAllStudents(json)))
  .catch(err => console.error(err));
}