import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
                  <Link to="/sign_up" class="btn btn-primary" >Edit</Link>

    )
  }
}

export default Header;