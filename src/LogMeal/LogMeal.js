import React from 'react';
import config from '../config'
// import MealsApiService from '../Services/MealsAPIService'
import ApiContext from '../ApiContext'
import './LogMeal.css'

export default class LogMeal extends React.Component{

    static contextType = ApiContext;

      submitMeal=(mn, cal, f, c, p)=>{

       let newMeal = JSON.stringify({
           meal_title: mn,
           calories: cal,
           fats: f,
           carbs: c,
           protiens: p,
       })
       let error;

       fetch(`${config.API_ENDPOINT}meals`,{
           method: "POST",
           headers: {"Content-Type": "application/json"},
           body: newMeal
       })
        .then(res =>{
            if(!res.ok){
                error= {code: res.status};
            }
            return res.json();
        })
        .then(meal =>{
            this.context.setMeals(meal)
        })
        .catch(error=>{
            console.log({error});
        })
       
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
                    <label>
                    Log another meal:
                    <br/>
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