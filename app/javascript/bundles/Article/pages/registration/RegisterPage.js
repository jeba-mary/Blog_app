import React from 'react';
import {connect} from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { signUp } from '../../actions';
import { Link }  from 'react-router-dom';


class RegisterPage extends React.Component {

  renderError({ error, touched }) {
    if(touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }

  
  renderInput = ({ input, label, meta}) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete="off"         className="pa2 ba b--black-40 w-100"
 />
        {this.renderError(meta)}
      </div>
    );
  }

  
  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field
          name="email"
          component={this.renderInput}
          label="Email"
        />
        <Field
          name="password"
          type="password"
          component={this.renderInput}
          label="Password"
        />
        <Field
          name="password_confirmation"
          type="password"
          component={this.renderInput}
          label="Password Again"
        />
        <br />
        <button className="btn btn-primary">Register</button>

        </form>

        <div className="position-absolute mid-center" style={{top: "50%", left: "50%"}}>
          <Link to="/sign_in" className="btn btn-primary">SignIn</Link>
        </div>

      </div>
    )
  }
}

const validate = (formValues) => {
  const errors = {};

  if(!formValues.email) {
    errors.email = 'Required'

  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)) {
    errors.email = 'Invalid email address'
  }

  if(!formValues.password) {
    errors.password = 'Must have 8 characters';
  }

  return errors;
}

export default reduxForm({
  form: 'RegisterPage',
  validate
})(RegisterPage);