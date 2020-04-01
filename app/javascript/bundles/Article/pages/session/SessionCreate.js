import React from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../actions';
import SessionPage from './SessionPage';

class SessionCreate extends React.Component {
  

  onSubmit = (formValues) => {
    this.props.signIn(formValues);
  }

  render() {
    return (
      <div>
        <SessionPage onSubmit={this.onSubmit} />

      </div>
    );
  }
}


export default connect(null , { signIn })(SessionCreate);