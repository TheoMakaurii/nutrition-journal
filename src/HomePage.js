import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import MealList from './MealList'


export default class HomePage extends Component {

    constructor(props){
        super(props)
        this.state = {
          meals : [
            {
              mealName : "Alfredo",
              calories : "777",
              fat : "111",
              carbs : "222",
              protien : "333",
              id : 123
            },
            {
              mealName : "Popcorn",
              calories : "110",
              fat : "17",
              carbs : "21",
              protien : "2",
              id : 124
            },
    
          ]
        }
      }
  
    render(){
      let theseMeals = this.state.meals
      const generateState = theseMeals.map((el)=>
        <ul key= {el.id}>
          <li>Meal: {el.mealName}</li>
          <li>Calories: {el.calories}</li>
          <li>Fat: {el.fat}</li>
          <li>Carbs: {el.carbs}</li>
          <li>Protien: {el.protien}</li>
          <br/>
        </ul>
        
      )
    return (
      <main className='HomePage'>
        <h1>This is your homepage!</h1>
        <h2> These are your most recent meals! Touch a meal to view more specific info about the nutrients you recorded</h2>
            

            <button><Link to='/LogMeal'> Log A New Meal!!</Link></button>
            <button type="button" id="pantry">Your Pantry</button>
            <MealList theseMeals={theseMeals} generateState = {generateState}/>
      </main>
    );
    }
}