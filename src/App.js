import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import HomePage from './HomePage';
import SignUp from './SignUp';
import Login from './LogIn';
import Nav from './Nav/Nav'
import LogMeal from './LogMeal/LogMeal'
import config from './config'
import MealList from './MealList';
//import ApiContext from './ApiContext'


export default class App extends Component {

  state ={
    meals:[],
    error: null
  }

  setMeals= meals =>{
    this.setState({
      meals,
      error: null
    })
  }
  componentDidMount() {
    fetch(`${config.API_ENDPOINT}meals`)
    .then((results) => {
        if (!results.ok)
            return results.json().then(e => Promise.reject(e));

        return results.json();
      
    })
    .then((meals)=>{
      
        this.setMeals(meals)
        console.log("meals", this.state.meals)
    })
    .catch(error => {
        console.error({error});
    });
}    

  render(){
    let theseMeals = this.state.meals
    let Meals = theseMeals.map((el)=>
    <ul key= {el.id}>
      <li>{el.meal_title}</li>
      <br/>
      <li>Calories: {el.calories}</li>
      <li>Fat: {el.fats}</li>
      <li>Carbs: {el.carbs}</li>
      <li>Protien: {el.protiens}</li>
      <br/>
    </ul>
        
      )
    
    return (

    <div  className='App'>
      <header>
          <h1>Let's eat!</h1>
      </header>
      <nav> 
        <Nav/>
      </nav>
      <main>
        
        <Route path='/signup' component ={SignUp}/>
        <Route path='/login' component ={Login}/>
        <Route path='/logmeal' component ={()=> 
        <LogMeal setMeals={this.setMeals}/>}/>
        <Route exact path='/' render ={props=> (<HomePage {...props} Meals={Meals}/>)} />
        
    
      </main>
      <footer>
        <p> Developed by Theodore McCauley</p>
      </footer>
    </div>
 
  )
  }
}

