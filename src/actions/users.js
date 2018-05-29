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
      'content-type': 'application/json'
    },
    body: JSON.stringify(newUser)
  })
    .then(res => res.json())
    .then(json => dispatch(registerNewUser(json)))
    .catch(err => console.error(err));
}