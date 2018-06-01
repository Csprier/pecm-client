import { GET_ALL_STUDENTS, PERIOD_ASSIGNMENT } from '../actions/students';

const initialState = {
  students: [],
  periods: []
}

export default (state = initialState, action) => {
  if (action.type === GET_ALL_STUDENTS) {
    return Object.assign({}, state, {
      students: action.students
    });
  }

  if (action.type === PERIOD_ASSIGNMENT) {
    return Object.assign({}, state, {
      periods: [action.data]    
    })
  }
  return state;
}

