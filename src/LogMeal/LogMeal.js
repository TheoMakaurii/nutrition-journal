import React from 'react';
// import config from '../config'
// import MealsApiService from '../Services/MealsAPIService'
import './LogMeal.css'
import MealsApiService from '../Services/MealsAPIService'
// import Meal from '../Meal/Meal';
// import TokenService from '../Services/TokenServices';


export default class LogMeal extends React.Component{

   

      submitMeal=(mn, cal, f, c, p)=>{

       let newMeal = JSON.stringify({
           meal_title: mn,
           calories: cal,
           fats: f,
           carbs: c,
           protiens: p,
       })
       let error;
       MealsApiService.postMeal(this.props.setMeals, newMeal, error)
       MealsApiService.getYourMeals(this.props.getMeals)
 
      }

    onSubmit =(e)=>{
        let mn =e.target.MealName.value    
        let cal =e.target.Calories.value
        let f =e.target.Fats.value
        let c =e.target.Carbs.value
        let p =e.target.Protiens.value
        e.preventDefault()
        this.submitMeal(mn, cal, f, c, p)
     
        this.props.history.push('/')
    }
    

    render(){


        return(
            <div className= "formContainer">
                <form onSubmit={this.onSubmit} className="submitBox">
                    <label name='formLogMeal'>
                    <p>Log another meal: </p> 
                
                    <input type="text" name="MealName" placeholder="Meal Name"/>
                    <br/>
                    <input type="number" name="Calories" placeholder="Calories"/>
                    <br/>
                    <input type="number" name="Fats" placeholder="Fats"/>
                    <br/>
                    <input type="number" name="Carbs" placeholder="Carbs"/>
                    <br/>
                    <input type="number" name="Protiens" placeholder="Protiens"/>
                    </label>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
               
            </div>
        )
    }
}