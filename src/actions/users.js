import { API_BASE_URL } from '../config';

// ---CREATE ---------------------------------------------------------------------------------
export const REGISTER_NEW_USER = 'REGISTER_NEW_USER';
export const registerNewUser = (id, username, fullname) => ({
	type: REGISTER_NEW_USER,
  id,
  username,  
  fullname
});

export const registerNewUserHandler = (username, password, fullname) => dispatch => {
  console.log({ fullname, username, password });
  
  const newUser = { fullname, username, password };

  return fetch(`${API_BASE_URL}/api/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
  })
    .then(res => res.json())
    .then(json => dispatch(registerNewUser(json)))
    .then(() => dispatch(loginUserHandler(username, password)))
    .catch(err => console.error(err));
}

// ---LOGIN ---------------------------------------------------------------------------------
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const loginUserSuccess = (username, token) => ({
  type: LOGIN_USER_SUCCESS,
  username,
  token
})

export const loginUserHandler = (username, password) => dispatch => {
  const user = {
    username,
    password
  };

  const myHeaders = new Headers();

  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Accept', 'application/json');

  return fetch(`${API_BASE_URL}/api/login`, {
    method: 'POST',
    headers: myHeaders,
    mode: 'cors',
    body: JSON.stringify(user)
  })
  .then(res => res.json())
  .then(({ authToken }) => dispatch(loginUserSuccess(username, authToken)))
  .catch(err => console.error(err));
}

// ---FILTER STUDENTS ---------------------------------------------------------------------------------
export const FILTER_STUDENT_SUCCESS = 'FILTER_STUDENT_SUCCESS';
export const filterStudentSuccess = (filter) => ({
  type: FILTER_STUDENT_SUCCESS,
  filter
})

// export const periodFilter = (valueToFilterBy, filteredArray) => dispatch => {
//   console.log('VTFB: ', valueToFilterBy);
//   console.log(filteredArray);
//   dispatch(filterStudentSuccess(filteredArray));
// }