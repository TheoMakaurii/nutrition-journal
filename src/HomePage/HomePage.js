import React, {Component} from 'react';
// import { Link } from 'react-router-dom'
import Meal from '../Meal/Meal'
import MealsApiService from '../Services/MealsAPIService'

import './HomePage.css'
import config from '../config'


export default class HomePage extends Component {
 
//   state ={
//     meals:[],
//     error: null,
    
//   }

//   getMeals =meals =>{
//     this.setState({
//       meals
//     })
//   }

//   setMeals= meal => {
//     this.setState({
//       meals:[meal, ...this.state.meals],
//       error: null
//     }) 
//   }

//   deleteMeal = meal => {
    
    
//     this.setState({
//         meals: this.state.meals.filter(el =>{ 
//           console.log("el.id", el.id)
//           return el.id !== meal})
//     });
// };



// componentDidMount() {

//   MealsApiService.getYourMeals(this.getMeals)
  
//   this.onClick=e=>{
//     e.preventDefault()
//     let mealId = parseInt(e.target.id)
//     console.log("mealId", parseInt(mealId))
    
//     MealsApiService.handleClickDelete(mealId, this.deleteMeal)

//   }
// }  


render(){

  let user_name=  window.localStorage.getItem(config.USER_NAME)
 
  // let stateMeals = this.state.meals
  // let meals = stateMeals.map((el)=>
  // <div className="mealItem" key= {el.id} >
  //     <button  className="deleteButton" onClick={this.onClick}> <span id={el.id} role="img" aria-label="delete">🚮</span></button>
  //     <ul  className="mealItem">

  //       <li>{el.meal_title}</li>
  //       <br/>
  //       <li>Calories: {el.calories}</li>
  //       <li>Fat: {el.fats}</li>
  //       <li>Carbs: {el.carbs}</li>
  //       <li>Protien: {el.protiens}</li>
  //       <br/>
  //       {/* <p>{el.date_published}</p> */}
  //     </ul>
  // </div>
  // )
      return (
  

      <div className='HomePage'>




        <div className ="greeting-box">
        <h1>Welcome back {user_name}!</h1>
        <h2> I hope you're hungry! </h2>
        </div>

            <Meal meals= {this.props.meals} />
      
   </div>

    );
    }
}