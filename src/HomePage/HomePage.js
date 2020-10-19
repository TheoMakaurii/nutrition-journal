import React, {Component} from 'react';
import Meal from '../Meal/Meal';
import './HomePage.css';
import config from '../config';


export default class HomePage extends Component {
 
render(){

  let user_name=  window.localStorage.getItem(config.USER_NAME)
 
      return (
    <div className='HomePage'>
      <div className ="greeting-box">
        <h1>Welcome back {user_name}!</h1>
        <h2> I hope you're hungry! </h2>
      </div>

      <Meal meals= {this.props.meals} />
      
    </div>

    );
  };
};