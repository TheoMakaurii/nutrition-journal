import React, {Component} from 'react';
// import { Route } from 'react-router-dom';
import Welcome from '../Welcome/Welcome'
import HomePage from '../HomePage/HomePage';
import SignUp from '../SignUp/SignUp';
import Login from '../Login/LogIn';
import Header from '../Header/Header'
import Nav from '../Nav/Nav'
import LogMeal from '../LogMeal/LogMeal'
//import config from './config'
// import ApiContext from './ApiContext'

// import MealsApiService from '../Services/MealsAPIService'

import PublicRoute from '../Utils/PublicOnly'
import PrivateRoute from '../Utils/PrivateOnly'



export default class App extends Component {



  render(){

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

        <PublicRoute path='/login' component ={(props) =>
        (<Login {...props} />)}/>

        <PublicRoute exact path='/' component ={Welcome}/>

        <PrivateRoute  path='/homepage' component ={(props)=> 
        (<HomePage {...props} />)} />

        <PrivateRoute path='/logmeal' component ={(props) =>
        (<LogMeal {...props} setMeals={this.setMeals} />)}/>
        
    
      </main>
      <footer>
        <p> Developed by Theodore McCauley</p>
      </footer>

    </div>
 
  )
  }
}

