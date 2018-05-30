import React from 'react';
import { reduxForm, Field } from 'redux-form';
import './user-login-form.css'
import { loginUserHandler } from '../actions/users'

export class UserLogin extends React.Component {
  onSubmit(values) {
    console.log(values);
    this.props.dispatch(loginUserHandler(values.username, values.password))
  }

  render() {
    return (
      <div className="user-login-form">
        <h2>Login to an Account</h2>
        <form onSubmit={this.props.handleSubmit(values =>
          this.onSubmit(values)
        )}>
          <label htmlFor="username">Username</label>
          <Field 
            name="username" 
            id="username" 
            type="text" 
            component="input"
            />
          <label htmlFor="password">Password</label>
          <Field 
            name="password" 
            id="password" 
            type="text" 
            component="input" 
          />
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'userLogin'
})(UserLogin);