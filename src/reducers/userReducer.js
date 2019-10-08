import { SET_ERROR, USER_LOGIN, USER_LOGOUT } from '../actions/userActions';

const initialState = {
  jwt: null,
  userId: null,
  username: null,
  error: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_ERROR:
      return { ...state, error: action.payload };
    case USER_LOGIN:
      return { ...state, ...action.payload };
    case USER_LOGOUT:
      return initialState
    default:
      return state;
  }
}