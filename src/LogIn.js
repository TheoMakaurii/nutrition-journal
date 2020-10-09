import React, {Component} from 'react';
// import { Route, Redirect } from 'react-router-dom'
import TokenService from './Services/TokenServices';
import AuthApiService from './Services/auth-api-services'


export default class LoginForm extends Component {

    static defaultProps = {
        onLoginSuccess: () => {}
      }

      state = { error: null }

    // handleSubmitBasicAuth = ev => {
    //     ev.preventDefault()
    //     const { user_name, password } = ev.target
    
    //     console.log('login form submitted')
    //     console.log(user_name.value, password.value)
    //     TokenService.saveAuthToken(
    //     TokenService.makeBasicAuthToken(user_name.value, password.value)
    //     )
    //     user_name.value = ''
    //     password.value = ''
    //     this.props.onLoginSuccess()
    //   }

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
           TokenService.saveUser( res.user_id)
           this.props.onLoginSuccess()
           this.props.history.push('/HomePage')
         })
         .catch(res => {
           this.setState({ error: res.error })
         })
         
     }

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
                    User name
                </label>
                <input
                    name='user_name'
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
  }
}
  