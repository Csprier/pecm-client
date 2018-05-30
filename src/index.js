import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import UserCreation from './components/user-creation-form';
import UserLogin from './components/user-login-form';

ReactDOM.render(
  <Provider store={store}>
    <UserCreation />
    <UserLogin />
  </Provider>, 
  document.getElementById('root')
);
