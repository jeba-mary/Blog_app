import React from 'react';

import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { REFUSED } from 'dns';

class LoginPage extends React.Component {
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

  render() {
    return (
      <div>
      <form >
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
      </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'LoginPage',
})(LoginPage);