import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import MealList from './MealList'
import Meal from './Meal/Meal'
//import ApiContext from './ApiContext'
import config from './config'

export default class HomePage extends Component {


    

  
    render(){

    return (
        
      <main className='HomePage'>
        <h1>This is your homepage!</h1>
        <h2> These are your most recent meals! </h2>
            <button><Link to='/LogMeal'> Log A New Meal!!</Link></button>
            <button type="button" id="pantry">Your Pantry</button>
            <Meal Meal= {this.props.Meals}/>
      </main>

    );
    }
}