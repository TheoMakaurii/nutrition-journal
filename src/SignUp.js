import React, { Component } from 'react'
import { Input} from './Utils/Utils'
import AuthApiService from './Services/auth-api-services'

export default class RegistrationForm extends Component {

    static defaultProps = {
        onRegistrationSuccess: () => {}
    }

    state = { error: null }

    handleSubmit = ev => {
        ev.preventDefault()
        const { full_name, user_name, password, calories, fats, carbs, protiens } = ev.target
    
        console.log('registration form submitted')
        console.log({ full_name, user_name, password })

        this.setState({erro:null})
        AuthApiService.postUser({
            full_name: full_name.value,
            user_name: user_name.value,
            password: password.value,
            calories: calories.value,
            fats: fats.value,
            carbs: carbs.value,
            protiens: protiens.value,
        })
        .then(user => {
            full_name.value = ''
            user_name.value = ''
            password.value = ''
            this.props.onRegistrationSuccess()
          })
        //   .catch(res => {
        //     this.setState({ error: res.error })
        //   })
      }


    render(){
        const { error } = this.state
    return (
      <main className='SignUp'>
        <h4>Signing up is easy! Take a minute to think up a unique username and password combo and you should be good to go!</h4>
        <form className='RegistrationForm' onSubmit={this.handleSubmit}>
            <div role='alert'>
                {error && <p className='red'>{error}</p>}
            </div>

            <div className='full_name'>
            <label htmlFor='RegistrationForm__full_name'/>
        
            <Input
                name='full_name'
                placeholder= 'full name'
                type='text'
                required
                id='RegistrationForm__full_name'>
            </Input>
            </div>
            <br/>   
            <div className='user_name'>
                <label htmlFor='RegistrationForm__user_name'/>
                <Input
                    name='user_name'
                    placeholder= 'User Name'
                    type='text'
                    required
                    id='RegistrationForm__user_name'>
                </Input>
            </div>
                <br/>
            <div className='password'>
                <label htmlFor='RegistrationForm__password'/>
                <Input
                    name='password'
                    placeholder='Password'
                    type='password'
                    required
                    id='RegistrationForm__password'>
                </Input>
            </div> 
                <br/>    
                <h4> Next we need to think of your nutrition goals? If your already have some numbers in mind, GREAT! If not don't worry about it. Put in what feels right, and then consult with a health specialist to come up with more concrete goals. We can always adjust these numbers later!</h4>
{/*     
                <p>How many...</p>
                <label htmlFor="calories"/>
                <input type="number" id="calories" name='calories' placeholder="Calories?" required/>    
                <br/>
                <label htmlFor="fats"/>
                <input type="number" id="fats" name="fats" placeholder="Fats" required/>     
                <br/> 
                <label htmlFor="carbs"/>
                <input type="number" id="carbs" name="carbs" placeholder="Carbs?" required/> 
                <br/>
                <label htmlFor="protiens"/>
                <input type="number" id="protiens" name="protiens" placeholder="Protiens?" required/> 
                <br/> */}

                <button type="submit" id="submit-button">SUBMIT</button>
            </form>
      </main>
    );
  }
}