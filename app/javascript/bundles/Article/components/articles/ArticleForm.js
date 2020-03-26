import React from 'react';
import { Field, reduxForm } from 'redux-form';

class ArticleForm extends React.Component {
  
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
    this.props.onSubmit(formValues);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="title"  component={this.renderInput} label="Enter Title"/>
        <Field name="content" component={this.renderInput} label="Enter Content" />
        <button className="btn btn-primary">Save</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if(!formValues.title) {
    errors.title = 'You mus enter title';
  }

  if(!formValues.content) {
    errors.content = 'you must enter content';
  }

  return errors;
}



export default reduxForm({
  form: 'ArticleForm',
  validate
})(ArticleForm);