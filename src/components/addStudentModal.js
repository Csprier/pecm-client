import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { toggleCreateStudentModal, createStudent } from '../actions/users';
import { listAllStudents, getAllPeriods } from '../actions/students';
import './css/addStudentModal.css';

class AddStudentModal extends React.Component {
  onClick() {
    this.props.dispatch(toggleCreateStudentModal());
  }

  render() {
    return(
      <div className="modal">
        <form onSubmit={this.props.handleSubmit(values => {
            this.props.dispatch(createStudent(values.firstname, values.lastname))
            .then(() => this.props.dispatch(listAllStudents()))
            .then(() => this.props.dispatch(getAllPeriods()))
            .then(() => this.props.dispatch(toggleCreateStudentModal()))
          })}>
          <table>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="createfirstname">First Name
                  <Field
                    aria-label="createfirstname"
                    name="firstname" 
                    id="firstname" 
                    type="text" 
                    component="input" 
                  />
                  </label>
                </td>
              </tr>

              <tr>
                <td>
                  <label htmlFor="createlastname">Last Name
                  <Field 
                    aria-label="createlastname"
                    name="lastname" 
                    id="lastname" 
                    type="text" 
                    component="input"
                    />
                    </label>
                </td>
              </tr>

              <tr>
                <td>
                  <button className="close-modal-btn" name="close-modal-button" type="button" onClick={() => this.onClick()}>Cancel</button>
                  <button className="modal-button" name="submit-new-student" type="submit">SUBMIT</button>
                </td>
              </tr>

            </tbody>
          </table>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'studentCreation'
})(AddStudentModal);