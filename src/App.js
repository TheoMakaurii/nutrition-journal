import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import HomePage from './HomePage';
import SignUp from './SignUp';
import Login from './LogIn';
import Nav from './Nav'
import MealList from './MealList'
import LogMeal from './LogMeal'
import config from './config'


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

    return (
    <div  className='App'>
      <header>
          <h1>Let's eat!</h1>
      </header>
      <nav> 
        <Nav/>
      </nav>
      <main>
        <Route exact path='/' component ={HomePage}/>
        <Route path='/signup' component ={SignUp}/>
        <Route path='/login' component ={Login}/>
        <Route path='/logmeal' component ={LogMeal}/>

        <MealList Meals ={this.props.meals}/>
      </main>
      <footer>
        <p> Developed by Theodore McCauley</p>
      </footer>
    </div>
  )
  }
}

