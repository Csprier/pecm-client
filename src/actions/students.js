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

// ===== PERIOD ASSIGNMENT ACTIONS AND THUNK ==========================================
// period_assignment_success
export const PERIOD_ASSIGNMENT_SUCCESS = 'PERIOD_ASSIGNMENT_SUCCESS';
export const periodAssignmentSuccess = (data) => ({
  type: PERIOD_ASSIGNMENT_SUCCESS,
  data
});

export const assignPeriodToStudent = (id, period) => dispatch => {
  return fetch(`${API_BASE_URL}/api/students/${id}/periods`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({period}) // (payload)
  })
  .then(res => res.json())
  .then((result) => {
    console.log('FETCH RESULT:', result.periods);
    dispatch(periodAssignmentSuccess(result.periods)) // result.period
  })
  .catch(err => console.error(err));
}

// ---- Action Creator --------------------------------
export const GET_PERIODS_SUCCESS = 'GET_PERIODS_SUCCESS';
export const getPeriodsSuccess = ({ periods }) => ({
  type: GET_PERIODS_SUCCESS,
  periods
});

export const getAllPeriods = () => dispatch => {
  return fetch(`${API_BASE_URL}/api/periods`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(result => {
    dispatch(getPeriodsSuccess({
      // reducedArray = (accumulator, currentValue) => accumulator + currentValue;
      // Object of objects
      periods: result.reduce((map, { id, ...values }) => ({ ...map, [id]: { id, ...values }}), {}) // Make an object out of the array
    }))
  })
  .catch(err => console.error(err));
};