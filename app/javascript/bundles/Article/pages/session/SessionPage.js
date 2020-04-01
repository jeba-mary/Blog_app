import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link }  from 'react-router-dom';


class SessionPage extends React.Component {
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
        <input {...input} autoComplete="off" className="pa2 ba b--black-40 w-100"/>
        {this.renderError(meta)}
      </div>
    );
  }

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }

  render() {
    return (
      <div class="container">
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
        <br/>
        <button className="btn btn-primary">Login</button>

      </form>

      <div className="position-absolute mid-center" style={{top: "50%", left: "50%"}}>
          <Link to="/sign_up" className="btn btn-primary">CreateNewAccount</Link>
        </div>


      </div>
    )
  }
}

export default reduxForm({
  form: 'SessionPage',
})(SessionPage);