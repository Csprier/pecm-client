import { API_BASE_URL } from '../config';
import { initialState } from '../reducers/studentReducer';

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
export const PERIOD_ASSIGNMENT = 'PERIOD_ASSIGNMENT';
export const periodAssignment = (data) => ({
  type: PERIOD_ASSIGNMENT,
  data
});

export const assignPeriodToStudent = (id, period) => dispatch => {
  console.log('PERIOD ', period);
  console.log('ID ', id);
  // const payload = initialState.periods.filter(per => per.id === period)[0].id
  const payload = {
    periods: [period]
  }
  console.log(payload);

  return fetch(`${API_BASE_URL}/api/students/${id}/periods`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload) // { periods: [period] }
  })
  .then(res => res.json())
  .then(result => {
    console.log('FETCH RESULT:', result);
    dispatch(periodAssignment(result.periods))
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
      periods: result.reduce((map, { id, ...values }) => ({ ...map, [id]: { id, ...values }}), {})
    }))
  })
  .catch(err => console.error(err));
};