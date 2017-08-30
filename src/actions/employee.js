import {
  GET_EMPLOYEES,
  ADD_EMPLOYEE,
  UPDATE_EMPLOYEE,
  DELETE_EMPLOYEE,
} from '../constants/ActionTypes'
import { createAction } from 'redux-actions'
import axios from 'axios'

function receiveEmployees(json, type) {
  return {
    type: type,
    payload: json,
  }
}

export const get_employees = () => {
  return dispatch =>
    axios({
      method: 'GET',
      url: `https://tooltips-back.herokuapp.com/employees`,
      //headers: {Authorization: localStorage.getItem('access_token')},
    })
      .then(response => response.data)
      .then(json => dispatch(receiveEmployees(json, GET_EMPLOYEES)))
}

export const add_employee = data => {
  let props = null
  if (typeof FormData === 'undefined') {
    props = []
  } else {
    props = new FormData()
    props.append('first_name', data.first_name)
    props.append('last_name', data.last_name)
    props.append('age', data.age)
    props.append('company', data.company)
    console.log('Props', props)
    if (data.image) {
      props.append('image', data.image)
    }
  }
  return dispatch =>
    axios({
      method: 'POST',
      url: `https://tooltips-back.herokuapp.com/employees`,
      //headers: {Authorization: localStorage.getItem('access_token')},
      data: props,
    })
      .then(response => response.data)
      .then(json => dispatch(receiveEmployees(json, ADD_EMPLOYEE)))
}

export const update_employee = (id, data) => {
  let props = null
  if (typeof FormData === 'undefined') {
    props = []
  } else {
    props = new FormData()
    props.append('first_name', data.first_name)
    props.append('last_name', data.last_name)
    props.append('age', data.age)
    props.append('company', data.company)
    //props.append('last_name', data.last_name);
    console.log('Props', props)
    if (data.image) {
      props.append('image', data.image)
    }
  }
  return dispatch =>
    axios({
      method: 'PATCH',
      url: `https://tooltips-back.herokuapp.com/employees/${id}`,
      //headers: {Authorization: localStorage.getItem('access_token')},
      data: props,
    })
      .then(response => response.data)
      .then(json => dispatch(receiveEmployees(json, UPDATE_EMPLOYEE)))
}
export const delete_employee = id => {
  console.log(id)
  return dispatch =>
    axios({
      method: 'DELETE',
      url: `https://tooltips-back.herokuapp.com/employees/${id}`,
      //headers: {Authorization: localStorage.getItem('access_token')},
      data: id,
    })
      .then(response => response.data)
      .then(json => dispatch(receiveEmployees(json, DELETE_EMPLOYEE)))
}
