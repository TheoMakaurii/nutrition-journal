import React from 'react'



export default React.createContext({
  meals: [],
  getMeals: ()=>{},
  setMeals: ()=>{}
})


// export class MealProvider extends Component{
//   state ={
//     meals:[],
//     error: null,
    
//   }

//   getMeals =meals =>{
//     this.setState({
//       meals,
//     })
//   }

//   setMeals= meal => {
//     this.setState({
//       meals:[...this.state.meals, meal],
//       error: null
//     }) 
//   }

//   render(){
    
//     const value={
//       meals: this.state.meals,
//       getMeals: this.getMeals,
//       setMeals: this.setMeals
//     }
//     return(
//       <ApiContext.Provider value={value}>
//         {this.props.children}
//       </ApiContext.Provider>
//     )
//   }
// }