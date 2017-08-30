import { LOGIN_USER, REGISTER_USER } from '../constants/ActionTypes'
import { createAction } from 'redux-actions'
import axios from 'axios'

function receiveUser(json, type) {
  return {
    type: type,
    payload: json,
  }
}

export const login = data => {
  return dispatch =>
    axios({
      method: 'POST',
      url: `https://tooltips-back.herokuapp.com/auth_user`,
      data: {
        email: data.email,
        password: data.password,
      },
    })
      .then(response => {
        localStorage.setItem('role', response.data.user.role)
        localStorage.setItem('auth_token', response.data.auth_token)
      })
      .then(json => dispatch(receiveUser(json, LOGIN_USER)))
}
export const register = data => {
  return dispatch =>
    axios({
      method: 'POST',
      url: `https://tooltips-back.herokuapp.com/users`,
      headers: {
        Accept: 'application/json',
        ContentType: 'application/json',
      },
      data: data,
    })
      .then(response => {
        console.log('register: ', response.data)
      })
      .then(json => dispatch(receiveUser(json, REGISTER_USER)))
}
