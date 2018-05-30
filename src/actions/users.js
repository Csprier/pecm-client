import { API_BASE_URL } from '../config';

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

// Why does my Network tab only show an OPTIONS request in the header, instead of a POST.
// How can I set the content-type of my request with CORS?