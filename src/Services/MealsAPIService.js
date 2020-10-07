import config from '../config'
import ApiContext from '../ApiContext'



const MealsApiService = {


getAllMeals(){
   return fetch(`${config.API_ENDPOINT}meals`)
    .then((results) => {
        if (!results.ok)
            return results.json().then(e => Promise.reject(e));

        return results.json();
      
    })
    .then((meals)=>{
      
        this.ApiContext.getMeals(meals)
        console.log("meals", this.state.meals)
    })
    .catch(error => {
        console.error({error});
    });
},


submitMeal(mn, cal, f, c, p){

    let newMeal = JSON.stringify({
        meal_title: mn,
        calories: cal,
        fats: f,
        carbs: c,
        protiens: p,
    })
    let error;

   return fetch(`${config.API_ENDPOINT}meals`,{
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
         ApiContext.setMeals(meal)
     })
     .catch(error=>{
         console.log({error});
     })
     
   }
   
}

export default MealsApiService