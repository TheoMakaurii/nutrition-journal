import config from '../config'

const TokenService = {
  saveAuthToken(token) {
    window.localStorage.setItem(config.TOKEN_KEY, token)
    
  },
  saveUser(user_id, user_name) {
    window.localStorage.setItem(config.USER_ID, user_id)
    window.localStorage.setItem(config.USER_NAME, user_name)
  },
  getAuthToken() {
    return window.localStorage.getItem(config.TOKEN_KEY)
  },
  clearAuthToken() {
    window.localStorage.removeItem(config.TOKEN_KEY)
    window.localStorage.removeItem(config.USER_ID)
    window.localStorage.removeItem(config.USER_NAME)
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken()
  },
  makeBasicAuthToken(userName, password) {
    return window.btoa(`${userName}:${password}`)
  },
}

export default TokenService