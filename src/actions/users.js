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

// ---ADD STUDENT------------------------------------------------
export const TOGGLE_CREATE_STUDENT_MODAL = 'TOGGLE_CREATE_STUDENT_MODAL';
export const toggleCreateStudentModal = () => ({
  type: TOGGLE_CREATE_STUDENT_MODAL
})

export const CREATE_STUDENT_SUCCESS = 'CREATE_STUDENT_SUCCESS';
export const createStudentSuccess = (student) => ({
  type: CREATE_STUDENT_SUCCESS,
  student
});

export const createStudent = (firstname, lastname) => dispatch => {
  const student = {
    firstname,
    lastname
  };

  return fetch(`${API_BASE_URL}/api/students`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(student)
  })
  .then(res => res.json())
  .then(() => dispatch(createStudentSuccess(student)))
  .catch(err => console.error(err))
}