import {LOGIN_STARTED, LOGIN_SUCCESS} from './types'
export const startLogin = () => {
  return {
    type: LOGIN_STARTED
  }
}
export const loginSucceeded = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: data
  }
}
