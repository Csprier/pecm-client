import React from 'react';
import { reduxForm, Field } from 'redux-form';
import './css/user-creation-form.css'
import { required, nonEmpty } from '../validators'
import { registerNewUserHandler } from '../actions/users';

export class UserCreation extends React.Component {
  onSubmit(values) {
    this.props.dispatch(registerNewUserHandler(values.username, values.password, values.fullname))
    .then(() => this.props.history.push('/UserControls'))
  }

  render() {
    return (
      <div className="user-creation-form">
          <h2>Create an Account</h2>
          <form onSubmit={this.props.handleSubmit(values =>
            this.onSubmit(values)
          )}>
            <label htmlFor="createfullname">Full Name</label>
            <Field
              aria-label="createfullname"
              name="fullname" 
              id="fullname" 
              type="text" 
              component="input" 
            />
            <label htmlFor="createusername">Username</label>
            <Field 
              aria-label="createusername"
              name="username" 
              id="username" 
              type="text" 
              component="input"
              validate={[required, nonEmpty]}
              />
            <label htmlFor="createpassword">Password</label>
            <Field 
              aria-label="createpassword"
              name="password" 
              id="password" 
              type="text" 
              component="input" 
              validate={[required, nonEmpty]}
            />
            <button name="submit-create-account" type="submit">CREATE ACCOUNT</button>
          </form>
      </div>
    );
  }
}



export default reduxForm({
  form: 'userCreation'
})(UserCreation);