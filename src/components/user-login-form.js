import React from 'react';
import { reduxForm, Field } from 'redux-form';
import './user-login-form.css'

export class UserLogin extends React.Component {
  onSubmit(values) {
    console.log(values);
  }

  render() {
    return (
      <div className="user-login-form.js">
        <h2>Create an Account</h2>
        <form onSubmit={this.props.handleSubmit(values =>
          this.onSubmit(values)
        )}>
          <label htmlFor="fullname">Full Name</label>
          <Field
            name="fullname" 
            id="fullname" 
            type="text" 
            component="input" 
          />
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