import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav(){
    return(
        <ul>
           <li> <Link to='/'> Home </Link> </li>
           <li> <Link to='/Login'> Login </Link> </li>
           <li> <Link to='/SignUp'> Sign Up </Link> </li>
           <li> <Link to='/LogMeal'> Log A New Meal</Link> </li>
        </ul>
    )
}