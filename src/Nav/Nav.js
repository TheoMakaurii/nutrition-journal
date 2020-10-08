import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

export default function Nav(){
    return(

        
        <ul className= "NavList">
           <li> <Link to='/HomePage' > Home </Link> </li>
           <li> <Link to='/Login'> Login </Link> </li>
           <li> <Link to='/SignUp'> Sign Up </Link> </li>
           <li> <Link to='/LogMeal'> Log A New Meal</Link> </li>
        </ul>
    )
}