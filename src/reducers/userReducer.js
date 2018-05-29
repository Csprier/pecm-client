import {REGISTER_NEW_USER} from '../actions/users';

const initialState = {};

export default (state=initialState, action) => {
  if(action.type === REGISTER_NEW_USER) {
    console.log(action)
    // return Object.assign()
  }
  return state;
}
