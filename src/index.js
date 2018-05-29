import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import UserCreation from './components/user-creation-form';

ReactDOM.render(
  <Provider store={store}>
    <UserCreation />
  </Provider>, 
  document.getElementById('root')
);
