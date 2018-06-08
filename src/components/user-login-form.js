import React from 'react';
import { reduxForm, Field } from 'redux-form';
import './css/user-login-form.css'
import { loginUserHandler } from '../actions/users'
import { required, nonEmpty } from '../validators'

export class UserLogin extends React.Component {
  onSubmit(values) {
    this.props.dispatch(loginUserHandler(values.username, values.password))
     .then(() => this.props.history.push('/UserControls')) 
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
            aria-label="username"
            name="username"
            id="loginusername" 
            type="text" 
            component="input"
            validate={[required, nonEmpty]}
            />
          <label htmlFor="password">Password</label>
          <Field 
            aria-label="password"
            name="password" 
            id="loginpassword" 
            type="password" 
            component="input" 
            validate={[required, nonEmpty]}
          />
          <button name="submit-login" type="submit">LOG IN</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'userLogin'
})(UserLogin);