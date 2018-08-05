import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import UserCreation from './components/user-creation-form';
import UserLogin from './components/user-login-form';
import UserControls from './components/user-controls';
import Onboarding from './components/onboarding';

import { BrowserRouter as Router, Route } from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
   <Router>
      <div className="app">
        <header role="banner">
          <h1 className="main-header"> P.E. Class Manager </h1>
        </header>
        <div className="background-image-container">
          <img src='https://images.unsplash.com/photo-1420547625303-0894752c1ffa?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1e4c4e7c47d5e3c4db4d12d92f06030b&auto=format&fit=crop&w=1653&q=80' alt="background" />
        </div>
        <main role="main">
          <Route exact path="/" component={UserCreation} /> 
          <Route exact path="/" component={UserLogin} />
          <Route exact path="/" component={Onboarding} />
          <Route path="/UserControls" component={UserControls} />            
        </main>
      </div>
    </Router>
  </Provider>, 
  document.getElementById('root')
);
