import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import TokenService from '../Services/TokenServices';
import './Header.css';

class Header extends Component {

    handleLogoutClick = () => {
        TokenService.clearAuthToken()
        this.props.history.push('/')
    };
    renderLogoutLink() {
        return (
          <div className='Header__logged-in'>
            <button
              onClick={this.handleLogoutClick}>
                Logout
            </button>
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
    <div className= "Header">
      <Link to='/' > <h1>Let's eat!</h1> </Link>

          {
            TokenService.hasAuthToken()
              ? this.renderLogoutLink()
              : this.renderLoginLink()
          }

    </div>
    );
  };
};


export default withRouter(Header);