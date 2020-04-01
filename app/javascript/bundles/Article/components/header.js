import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../actions';

class Header extends React.Component {


  handleLogout = () => {
    this.props.signOut();
  }

  render() {
    return (
      <div class = "container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">Blog</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>
          <ul class="nav navbar-nav pull-xs-right">
            <li class="nav-item">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class ="nav-link" href="#">
                <Link to="/articles/new" style={{textDecoration: "none", color: "grey"}}>New Article</Link>
              </a>
            </li>
            <li class="nav-item">
              <a class ="nav-link" href="#">
                <Link to="/sign_in" style={{textDecoration: "none", color: "grey"}}>Login</Link>
              </a>
            </li>
            <li class="nav-item">
              <a class ="nav-link" href="#">
                <Link to="#" style={{textDecoration: "none", color: "grey"}} onClick={this.handleLogout}>Logout</Link>
              </a>
            </li>
            
          </ul>

          </nav>
      </div>
    )
  }
}


export default connect(null, { signOut })(Header);
