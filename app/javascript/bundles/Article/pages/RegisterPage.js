import React from 'react';
import {connect} from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { signUp } from '../actions';


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
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  }

  onSubmit = (formValues) => {
    this.props.signUp(formValues);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
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

        <button className="btn btn-primary">Register</button>

        </form>
      </div>
    )
  }
}


export default reduxForm({
  form: 'RegisterPage',
})(RegisterPage);