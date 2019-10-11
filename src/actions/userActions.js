import request from 'superagent';
import { baseURL, socket } from '../constants';

export const SET_ERROR = 'SET_ERROR';
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';
export const login = (data) => {
    return (dispatch) => {
        request.post(`${baseURL}/login`)
            .send(data)
            .then(response => {
                console.log(response.body);
                socket.emit('userLogin', response.body.username);
                dispatch({
                    type: USER_LOGIN,
                    payload: response.body
                });
            })
            .catch(error => {
                dispatch({
                    type: SET_ERROR,
                    payload: error.response.body.message
                })
            })
    }
}

export const logout = () => {
  return {
    type: USER_LOGOUT
  }
}