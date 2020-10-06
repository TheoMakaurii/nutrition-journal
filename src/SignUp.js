import React from 'react';

export default function LogIn() {
    return (
      <main className='SignUp'>
        <h4>Signing up is easy! Take a minute to think up a unique username and password combo and you should be good to go!</h4>
            <form className="options"> 
                <input type="text" id="username" name="username"required/> 
                <label htmlFor="username"> Username </label>
                <br/>
                <input type="text" id="password" name="password"required/> 
                <label htmlFor="password"> Password </label>   
                <br/>    
                <h4> Next we need to think of your nutrition goals? If your already have some numbers in mind, GREAT! If not don't worry about it. Put in what feels right, and then consult with a health specialist to come up with more concrete goals. We can always adjust these numbers later!</h4>
    
                <p>How many...</p>
                <label htmlFor="calories"/>
                <input type="number" id="calories" name="calories" placeholder="Calories?" required/>    
                <br/>
                <label htmlFor="fats"/>
                <input type="number" id="fats" name="fats" placeholder="Fats" required/>     
                <br/> 
                <label htmlFor="carbs"/>
                <input type="number" id="carbs" name="carbs" placeholder="Carbs?" required/> 
                <br/>
                <label htmlFor="protiens"/>
                <input type="number" id="protiens" name="protiens" placeholder="Protiens?" required/> 
                <br/>

                <button type="submit" id="submit-button">SUBMIT</button>
            </form>
      </main>
    );
  }
