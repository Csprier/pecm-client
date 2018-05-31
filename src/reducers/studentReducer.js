import { GET_ALL_STUDENTS, PERIOD_ASSIGNMENT } from '../actions/students';

const initialState = {
  students: []
}

export default (state = initialState, action) => {
  if (action.type === GET_ALL_STUDENTS) {
    console.log('Get All Students Reducer');
    console.log(action);
    return Object.assign({}, state, {
      students: action.students
    });
  }

  if (action.type === PERIOD_ASSIGNMENT) {
    console.log('ASSIGN PERIOD reducer');
    console.log(action);
    return Object.assign({}, state, {
      ...state,
      periods: action.periods     
    })
  }
  return state;
}