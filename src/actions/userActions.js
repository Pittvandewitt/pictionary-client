import request from 'superagent';
import { baseURL } from '../constants';

export const SET_ERROR = 'SET_ERROR';
export const USER_LOGIN = 'USER_LOGIN';
export const login = (data) => {
    return (dispatch) => {
        request.post(`${baseURL}/login`)
            .send(data)
            .then(response => {
                console.log(response.body)
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