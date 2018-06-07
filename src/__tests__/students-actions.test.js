import { 
  GET_ALL_STUDENTS,
  PERIOD_ASSIGNMENT_SUCCESS,
  GET_PERIODS_SUCCESS,
  getAllStudents,
 } from '../actions/students';

describe('TEST ACTIONS', () => {
  it('Should return the action: GET_ALL_STUDENTS', () => {
    const students = [
      { firstname: "test", lastname: "student1" },
      { firstname: "test", lastname: "student2" },
      { firstname: "test", lastname: "student3" }
    ]
    const action = getAllStudents(students);

    expect(action.type).toEqual(GET_ALL_STUDENTS);
    expect(action.students).toEqual(students);
  });

  it('Should return the action: PERIOD_ASSIGNMENT_SUCCESS', () => {
    const action = {
      type: PERIOD_ASSIGNMENT_SUCCESS
    };
    expect(action.type).toEqual(PERIOD_ASSIGNMENT_SUCCESS);
  });

  it('Should return the action: GET_PERIODS_SUCCESS', () => {
    const action = {
      type: GET_PERIODS_SUCCESS
    };
    expect(action.type).toEqual(GET_PERIODS_SUCCESS);
  });
});
