import React, {Component} from 'react';
import { Route, Redirect } from 'react-router-dom';
import HomePage from './HomePage';
import SignUp from './SignUp';
import Login from './LogIn';
import Nav from './Nav/Nav'
import LogMeal from './LogMeal/LogMeal'
import config from './config'
//import ApiContext from './ApiContext'


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
    fetch(`${config.API_ENDPOINT}meals`)
    .then((results) => {
        if (!results.ok)
            return results.json().then(e => Promise.reject(e));

        return results.json();
      
    })
    .then((meals)=>{
      
        this.getMeals(meals)
        console.log("meals", this.state.meals)
    })
    .catch(error => {
        console.error({error});
    });
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

        <Route exact path='/' render ={props=> 
        (<HomePage {...props} Meals={Meals}/>)} />

        <Route path='/logmeal' render ={props =>
        (<LogMeal {...props} setMeals={this.setMeals}/>)}/>
        
    
      </main>
      <footer>
        <p> Developed by Theodore McCauley</p>
      </footer>
    </div>
 
  )
  }
}

