import {
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  GET_MY_INFO_SUCCESS,
  GET_MY_INFO_FAIL
} from "../actions/user";

const INITIAL_STATE = {
  token: {},
  isLoggedIn: false,
  error: null,
  user: {}
};

export default function user(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN_USER_SUCCESS:
      localStorage.setItem("jwt", JSON.stringify(action.payload.token));
      return {
        ...state,
        token: action.payload.token,
        isLoggedIn: true
      };

    case LOGIN_USER_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        error: "login failed"
      };

    case GET_MY_INFO_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload.user
      };

    case GET_MY_INFO_FAIL:
      return {
        ...state,
        isLoggedIn: false,
        user: {}
      };

    default:
      return state;
  }
}
