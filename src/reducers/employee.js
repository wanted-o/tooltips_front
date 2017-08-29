import {
  ADD_EMPLOYEE,
  GET_EMPLOYEES,
  UPDATE_EMPLOYEE,
  DELETE_EMPLOYEE,
} from '../constants/ActionTypes'

const initialState = {
  all_employees: [],
  employee: null,
}

export default function employee(state = initialState, action) {
  switch (action.type) {
    case GET_EMPLOYEES:
      return { ...state, all_employees: action.payload }
    case DELETE_EMPLOYEE:
      return { ...state, all_employees: action.payload }
    default:
      return state
  }
}
