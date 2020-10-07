import React, {Component} from 'react';

export default class LoginForm extends Component {

    static defaultProps = {
        onLoginSuccess: () => {}
      }

      state = { error: null }

    handleSubmitBasicAuth = ev => {
        ev.preventDefault()
        const { user_name, password } = ev.target
    
        console.log('login form submitted')
        console.log({ user_name, password })
    
        user_name.value = ''
        password.value = ''
        this.props.onLoginSuccess()
      }
    render(){
        const { error } = this.state
    return (
      <main className='LogIn'>
        <h2>Log In To Your Account!</h2>
        <form className="LoginForm" onSubmit={this.handleSubmitBasicAuth}> 
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
  