import React from 'react'


export default function MealList(props){ 
    return(
    <div>
        <ul>{props.generateState}</ul>
        {props.submitMeals}
    </div>
    
    )
        

}