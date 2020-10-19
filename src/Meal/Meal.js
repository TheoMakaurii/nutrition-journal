import React from 'react';
import './Meal.css';

export default function Meal(props) {
    return (
      <div className="Meal">
        <div className="meal_item">
          <div className="meal_name">
                
                {props.meals}
          
          </div>
        </div>      
      </div>
    ); 
  };