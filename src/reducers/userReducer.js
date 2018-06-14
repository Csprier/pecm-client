import { TOGGLE_CREATE_STUDENT_MODAL, REGISTER_NEW_USER, LOGIN_USER_SUCCESS, CREATE_STUDENT_SUCCESS } from '../actions/users';

const initialState = {
  modalView: false
};

export default (state=initialState, action) => {
  if(action.type === TOGGLE_CREATE_STUDENT_MODAL){
    return {
      ...state,
      modalView: !state.modalView,
    };
  }

  if(action.type === REGISTER_NEW_USER) {
    return Object.assign({}, state, {
      ...state,
      fullname: action.fullname,
      username: action.username
    });
  }
  
  if (action.type === LOGIN_USER_SUCCESS) {
    return Object.assign({}, state, {
      ...state,
      username: action.username,
      token: action.token
    });
  }

  if (action.type === CREATE_STUDENT_SUCCESS) {
    return {
      ...state,
      firstname: action.firstname,
      lastname: action.lastname  
    }
  }
  return state;
}

