import React, {Component} from 'react';
// import { Route } from 'react-router-dom';
import Welcome from './Welcome/Welcome'
import HomePage from './HomePage/HomePage';
import SignUp from './SignUp';
import Login from './LogIn';
import Header from './Header/Header'
import Nav from './Nav/Nav'
import LogMeal from './LogMeal/LogMeal'
//import config from './config'
// import ApiContext from './ApiContext'

import MealsApiService from './Services/MealsAPIService'

import PublicRoute from './Utils/PublicOnly'
import PrivateRoute from './Utils/PrivateOnly'



export default class App extends Component {

  state ={
    meals:[],
    error: null,
    
  }

  getMeals =meals =>{
    this.setState({
      meals
    })
  }

  setMeals= meal => {
    this.setState({
      meals:[meal, ...this.state.meals],
      error: null
    }) 
  }

  deleteMeal = meal => {
    
    
    this.setState({
        meals: this.state.meals.filter(el =>{ 
          console.log("el.id", el.id)
          return el.id !== meal})
    });
};



componentDidMount() {

  MealsApiService.getYourMeals(this.getMeals)

  this.onClick=e=>{
    e.preventDefault()
    let mealId = parseInt(e.target.id)
    console.log("mealId", parseInt(mealId))
    
    MealsApiService.handleClickDelete(mealId, this.deleteMeal)

  }
}  


  render(){


    let stateMeals = this.state.meals
    let meals = stateMeals.map((el)=>
    <div className="mealItem" key= {el.id} >
        <button  className="deleteButton" onClick={this.onClick}> <span id={el.id} role="img" aria-label="delete">🚮</span></button>
    <ul  className="mealItem">

      <li>{el.meal_title}</li>
      <br/>
      <li>Calories: {el.calories}</li>
      <li>Fat: {el.fats}</li>
      <li>Carbs: {el.carbs}</li>
      <li>Protien: {el.protiens}</li>
      <br/>
      {/* <p>{el.date_published}</p> */}
    </ul>
        </div>
    )
   
    return (

    <div  className='App'>
  
      <header>
          <Header/>
      </header>
      <nav> 
        <Nav/>
      </nav>
      <main>
        
        <PublicRoute path='/signup' component ={SignUp}/>

        <PublicRoute path='/login' component ={Login}/>

        <PublicRoute exact path='/' component ={Welcome}/>

        <PrivateRoute  path='/homepage' component ={(props)=> 
        (<HomePage {...props} meals={meals} getMeals={this.getMeals}/>)} />

        <PrivateRoute path='/logmeal' component ={(props) =>
        (<LogMeal {...props} setMeals={this.setMeals} getMeals={this.getMeals}/>)}/>
        
    
      </main>
      <footer>
        <p> Developed by Theodore McCauley</p>
      </footer>

    </div>
 
  )
  }
}

