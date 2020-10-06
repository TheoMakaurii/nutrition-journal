import React from 'react'

export default function Meal(props) {
    return (
      <div className="Meal">
        <div className="meal__item">
          <div className="meal__name">

                {props.mealName}
    
          </div>
        </div>      
      </div>
    ) 
  }