import React, {Component} from 'react';
import TokenService from '../Services/TokenServices';
import AuthApiService from '../Services/auth-api-services';
import MealsApiService from '../Services/MealsAPIService';
import './Login.css';


export default class LoginForm extends Component {

    static defaultProps = {
        onLoginSuccess: () => {}
      }

      state = { error: null }


     handleSubmitJwtAuth = ev => {
       ev.preventDefault()
       this.setState({ error: null })
       const { user_name, password } = ev.target
    
       AuthApiService.postLogin({
         user_name: user_name.value,
         password: password.value,
       })
        .then(res => {
           user_name.value = ''
           password.value = ''
           TokenService.saveAuthToken(res.authToken)
           TokenService.saveUser( res.user_id, res.user_name)
           this.props.onLoginSuccess()
           MealsApiService.getYourMeals(this.props.getMeals)
           this.props.history.push('/HomePage')
         })
        .catch(res => {
           this.setState({ error: res.error })
         });
         
     };

    render(){
        const { error } = this.state
      
    return (
      <main className='LogIn'>
        <h2>Log In To Your Account!</h2>
        <form className="LoginForm" onSubmit={this.handleSubmitJwtAuth}> 
            <div role='alert'>
            {error && <p className='red'>{error}</p>}
            </div>
            <div className='user_name'>
                <label htmlFor='LoginForm__user_name'>
                    Username
                </label>
                <input
                    name='user_name'
                    placeholder= 'Jenny'
                    id='LoginForm__user_name'>
                </input>
            </div>

            <br/>

            <div className='password'>
              <label htmlFor='LoginForm__password'>
                  Password
              </label>
              <input
                name='password'
                placeholder='8675309!'
                type='password'
                id='LoginForm__password'>
              </input>
            </div>

            <br/>    

            <button type="submit" id="submit-button">
              SUBMIT
            </button>
        </form>
      </main>
    );
  };
};
  