import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import UserCreation from './components/user-creation-form';
import UserLogin from './components/user-login-form';
import UserControls from './components/user-controls';

import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
   <Router>
      <div className="user-creation-login">
        <Route exact path="/" component={UserCreation} /> 
        <Route exact path="/" component={UserLogin} />
        <Route path="/UserControls" component={UserControls} />  
      </div>
    </Router>
  </Provider>, 
  document.getElementById('root')
);
