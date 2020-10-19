import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../Services/TokenServices';
import './Nav.css';

export default class Nav extends Component {
  handleLogoutClick = () => {
        TokenService.clearAuthToken()
    };

  renderLogoutLink() {
    return (
        <div className='Header__logged-in'>
          <Link
            onClick={this.handleLogoutClick}
            to='/'>
            Logout
          </Link>
        </div>
      );
    };

  renderLoginLink() {
        return (
          <div className='Header__not-logged-in'>
            <Link
              to='/SignUp'>
              Register
            </Link>
            <br/>
            <Link
              to='/Login'>
              Log in
            </Link>
          </div>
      );
    };
 
  render(){
    return( 
    <> 
      <ul className= "NavList">
        <li> <Link to='/HomePage' > Home </Link> </li>
        <li> <Link to='/LogMeal'> Log A New Meal</Link> </li>
      </ul>
    </>
    );
  };
};
