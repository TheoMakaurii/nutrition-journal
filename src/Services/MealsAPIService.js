import config from '../config'
import TokenService from '../Services/TokenServices'
// import AuthApiServices from './auth-api-services'


const MealsApiService = {


getYourMeals(getMeals){
    let user_id=  window.localStorage.getItem(config.USER_ID)
   
   return fetch(`${config.API_ENDPOINT}meals/${user_id}`,  {  
   
        headers: {
           'authorization': `bearer ${TokenService.getAuthToken()}`,
               },
              })
      .then((results) => {
          if (!results.ok)
              return results.json().then(e => Promise.reject(e));
  
          return results.json();
        
      })
      .then((meals)=>{
        
          getMeals(meals)
    
          
      })
      .catch(error => {
          console.error({error});
      });
  },


postMeal(setMeals, newMeal, error){

   return fetch(`${config.API_ENDPOINT}meals`,{
        method: "POST",
        headers: {"Content-Type": "application/json",
                     'Authorization':`bearer ${TokenService.getAuthToken()}`},
        body: newMeal
    })
     .then(res =>{
         if(!res.ok){
             error= {code: res.status};
         }
         return res.json();
     })
     .then(meal =>{
         setMeals(meal)
     })
     .catch(error=>{
         console.log({error});
     })
    
   
},

handleClickDelete( mealId){

//   console.log(mealId)
  fetch(`${config.API_ENDPOINT}meals/${mealId}`, {
    method: 'DELETE',
    headers: {"Content-Type": "application/json",
    'Authorization':`bearer ${TokenService.getAuthToken()}`},
  })
    .then(res => {
      if (!res.ok)
        return res.json().then(e => Promise.reject(e))
      return res.json()
    })

    .catch(error => {
      console.error({ error })
    })
},
  


}

export default MealsApiService