import React from 'react';

export default function LogIn() {
    return (
      <main className='LogIn'>
        <h2>Log In To Your Account!</h2>
        <form className="options"> 
                <input type="text" id="username" name="username"required/> 
                <label htmlFor="username"> Username </label>
                <br/>
                <input type="text" id="password" name="password"required/> 
                <label htmlFor="password"> Password </label>   
                <br/>         
                <button type="submit" id="submit-button">SUBMIT</button>
            </form>
      </main>
    );
  }

  