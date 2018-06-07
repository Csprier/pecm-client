import { GET_ALL_STUDENTS, GET_PERIODS_SUCCESS } from '../actions/students';
import { FILTER_STUDENT_SUCCESS } from '../actions/users';

export const initialState = {
  modalView: false,
  students: [],
  periods: {}
}

export default (state = initialState, action) => {
  if (action.type === GET_ALL_STUDENTS) {
    return Object.assign({}, state, {
      students: action.students
    });
  }

  if (action.type === GET_PERIODS_SUCCESS) {
    return Object.assign({}, state, {
      periods: action.periods
    });
  }

  if (action.type === FILTER_STUDENT_SUCCESS) {
    return Object.assign({}, state, {
      ...state,
      filter: action.filter 
    })
  }
  return state;
}