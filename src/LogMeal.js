import React from 'react';
import MealList from './MealList';

export default class LogMeal extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          meals : [
            {
              mealName : "Shrimp Alfredo",
              calories : "777",
              fat : "222",
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

      submitMeal=(mn, cal, f, c, p)=>{

        this.setState({
          meals: [...this.state.meals, { 
          mealName:mn,
          calories : cal,
          fat : f,
          carbs : c,
          protien : p,
          id: Math.random()
          }
          ]
        })
        console.log("here",this.state)
      }

    onSubmit =(e)=>{
        let mn =e.target.MealName.value    
        let cal =e.target.Calories.value
        let f =e.target.Fats.value
        let c =e.target.Carbs.value
        let p =e.target.Protiens.value
        e.preventDefault()
        this.submitMeal(mn, cal, f, c, p)
        e.target.MealName.value=''
        e.target.Calories.value=''
        e.target.Fats.value=''
        e.target.Carbs.value=''
        e.target.Protiens.value=''
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
        return(
            <>
                <form onSubmit={this.onSubmit} className="submitBox">
                    <label>
                    Log another meal:
                    <br/>
                    <input type="text" name="MealName" placeholder="Meal Name"/>
                    <br/>
                    <input type="text" name="Calories" placeholder="Calories"/>
                    <br/>
                    <input type="text" name="Fats" placeholder="Fats"/>
                    <br/>
                    <input type="text" name="Carbs" placeholder="Carbs"/>
                    <br/>
                    <input type="text" name="Protiens" placeholder="Protiens"/>
                    </label>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
                <MealList theseMeals={theseMeals} generateState = {generateState}/>
            </>
        )
    }
}