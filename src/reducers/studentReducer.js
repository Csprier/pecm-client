import { GET_ALL_STUDENTS, PERIOD_ASSIGNMENT_SUCCESS, GET_PERIODS_SUCCESS } from '../actions/students';
import { FILTER_STUDENT_SUCCESS } from '../actions/users';
export const initialState = {
  students: [],
  periods: {}
}

export default (state = initialState, action) => {
  if (action.type === GET_ALL_STUDENTS) {
    return Object.assign({}, state, {
      students: action.students
    });
  }

  if (action.type === PERIOD_ASSIGNMENT_SUCCESS) {
    // console.log(action);
    // console.log(state);
    // return Object.assign({}, state, {
    //   ...state,
    //   periods: [ ...state.periods, action.period ]
    // })
  }

  if (action.type === GET_PERIODS_SUCCESS) {
    return Object.assign({}, state, {
      periods: action.periods
    });
  }

  if (action.type === FILTER_STUDENT_SUCCESS) {
    students: action.students
  }
  return state;
}

// Whens someone selects periods to assign to student, 
// create a thunk that will do a fetch to the server(to the update endpoint)
// if successful, then call other thunk from that thunk, and give it the dispatch that it needs
// listAllStudents()(dispatch) <-- available in a thunk

// IS THIS HOW I RERENDER????

// get the data for one student, instead of all students
// new action to update the individual student