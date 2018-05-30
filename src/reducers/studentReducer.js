import { GET_ALL_STUDENTS } from '../actions/students';

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
  return state;
}