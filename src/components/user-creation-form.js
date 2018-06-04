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
            validate={[required, nonEmpty]}
            />
          <label htmlFor="password">Password</label>
          <Field 
            name="password" 
            id="password" 
            type="text" 
            component="input" 
            validate={[required, nonEmpty]}
          />
          <button type="submit">CREATE ACCOUNT</button>
        </form>
      </div>
    );
  }
}



export default reduxForm({
  form: 'userCreation'
})(UserCreation);