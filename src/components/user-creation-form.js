import React from 'react';
import { reduxForm, Field } from 'redux-form';
import './user-creation-form.css'


export class UserCreation extends React.Component {
  onSubmit(values) {
    console.log(values);
  }

  render() {
    return (
      <div className="user-creation-form">
        <form onSubmit={this.props.handleSubmit(values =>
          this.onSubmit(values)
        )}>
          <label htmlFor="fullname">Full name</label>
          <Field name="fullname" id="fullname" type="text" component="input" />
          <label htmlFor="username">Username</label>
          <Field name="username" id="username" type="text" component="input" />
          <label htmlFor="password">Password</label>
          <Field name="password" id="password" type="text" component="input" />
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'userCreation'
})(UserCreation);