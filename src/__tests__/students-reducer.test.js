import { 
  GET_ALL_STUDENTS, 
  GET_PERIODS_SUCCESS, 
  getAllStudents, 
  periodAssignmentSuccess, 
  getAllPeriods, 
  getPeriodsSuccess, 
  assignPeriodToStudent
} from '../actions/students';

import { FILTER_STUDENT_SUCCESS } from '../actions/users';

import reducer from '../reducers/studentReducer';


export const initialState = {
  modalView: false,
  students: [],
  periods: {}
}

describe('REDUCER', () => {
  it('Should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        modalView: false,
        students: [],
        periods: {}
      }
    )
  });

  it('Should handle GET_ALL_STUDENTS', () => {
    const students = [
      { firstname: "test", lastname: "student1" },
      { firstname: "test", lastname: "student2" },
      { firstname: "test", lastname: "student3" }
    ]

    const state = {
      students: []
    }

    const action = getAllStudents(students);
    const newState = reducer(state, action)

    expect(newState.students).toEqual(students);
  });

  it('Should handle GET_PERIODS_SUCCESS', () => {
    const periods = {
     1: { name: "First period", time: "8am to 9am"},
     2: { name: "Second period", time: "9am to 10am"},
     3: { name: "Third period", time: "10am to 11am"}
    }

    const state = {
      periods: {}
    }

    const action = getPeriodsSuccess(periods);
    const newState = reducer(state, action);
    
    expect(newState).toEqual(state.periods);
  });
})