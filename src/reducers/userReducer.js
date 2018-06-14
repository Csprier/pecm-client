import { TOGGLE_MODAL, REGISTER_NEW_USER, LOGIN_USER_SUCCESS } from '../actions/users';

const initialState = {};

export default (state=initialState, action) => {
  if(action.type === TOGGLE_MODAL){
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
  return state;
}

