import React, {Component} from 'react';
// import { Route } from 'react-router-dom';
import Welcome from './Welcome/Welcome'
import HomePage from './HomePage/HomePage';
import SignUp from './SignUp';
import Login from './LogIn';
import Header from './Header/Header'
import Nav from './Nav/Nav'
import LogMeal from './LogMeal/LogMeal'
import config from './config'
import ApiContext from './ApiContext'

import MealsApiService from './Services/MealsAPIService'
// import TokenService from './Services/TokenServices'
import PublicRoute from './Utils/PublicOnly'
import PrivateRoute from './Utils/PrivateOnly'



export default class App extends Component {

  state ={
    meals:[],
    error: null,
    
  }

  getMeals =meals =>{
    this.setState({
      meals,
    })
  }

  setMeals= meal => {
    this.setState({
      meals:[...this.state.meals, meal],
      error: null
    }) 
  }



  componentDidMount() {
   
    MealsApiService.getYourMeals(this.getMeals)
}    

// handleClickDelete = e => {
//   e.preventDefault()
//   const mealId = this.props.id
  
//   fetch(`${config.API_ENDPOINT}meals/${mealId}`, {
//     method: 'DELETE',
//     headers: {
//       'content-type': 'application/json'
//     },
//   })
//     .then(res => {
//       if (!res.ok)
//         return res.json().then(e => Promise.reject(e))
//       return res.json()
//     })
//     .then(() => {
//       this.deleteNote(mealId)
//       // allow parent to perform extra behaviour
//       this.props.onDeleteNote(mealId)
//     })
//     .catch(error => {
//       console.error({ error })
//     })
// }

  render(){

    let stateMeals = this.state.meals
    let Meals = stateMeals.map((el)=>
    <ul key= {el.id}>
      {/* <button type="button" className="deleteButton" onClick={this.handleClickDelete}>X</button> */}
      <li>{el.meal_title}</li>
      <br/>
      <li>Calories: {el.calories}</li>
      <li>Fat: {el.fats}</li>
      <li>Carbs: {el.carbs}</li>
      <li>Protien: {el.protiens}</li>
      <br/>
    </ul>
        
    )
    
    const value ={
      meals: this.state.meals,
      setMeals: this.setMeals,
    }

    return (

    <div  className='App'>
      <ApiContext.Provider value={value}>
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
        (<HomePage {...props} Meals={Meals} getMeals={this.getMeals}/>)} />

        <PrivateRoute path='/logmeal' component ={(props) =>
        (<LogMeal {...props} setMeals={this.setMeals}/>)}/>
        
    
      </main>
      <footer>
        <p> Developed by Theodore McCauley</p>
      </footer>
      </ApiContext.Provider>
    </div>
 
  )
  }
}

