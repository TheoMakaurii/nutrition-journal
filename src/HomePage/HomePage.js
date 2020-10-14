import React, {Component} from 'react';
// import { Link } from 'react-router-dom'
import Meal from '../Meal/Meal'
import MealsApiService from '../Services/MealsAPIService'
import './HomePage.css'
//import ApiContext from './ApiContext'


export default class HomePage extends Component {
//   componentDidMount() {
   
//     setInterval(
//     MealsApiService.getYourMeals(this.props.getMeals), 5000 
//     )

// }    

  render(){
    // MealsApiService.getYourMeals(this.props.getMeals)
      return (
        
      <main className='HomePage'>
        <div className ="greeting-box">
        <h1>Welcome back!</h1>
        <h2> I hope you're hungry! </h2>
        </div>
        {/* <div className='button-box'>
            <button><Link to='/LogMeal'> Log A New Meal!!</Link></button>
            <button type="button" id="pantry">Your Pantry</button>
        </div> */}
            <Meal meals= {this.props.meals} setMeals={this.props.setMeals}/>
      </main>

    );
    }
}