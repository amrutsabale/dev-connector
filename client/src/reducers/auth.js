import {
  REGISTER_FAILURE,
  REGISTER_SUCCESS,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
};

const auth = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS: {
      localStorage.setItem("token", payload.token);
      return { ...state, ...payload, isAuthenticated: true, loading: false };
    }
    case REGISTER_FAILURE:
    case AUTH_ERROR:
    case LOGIN_FAILURE:
    case LOGOUT: {
      localStorage.removeItem("token");
      return { ...state, token: null, isAuthenticated: false, loading: false };
    }
    case USER_LOADED:
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };

    default:
      return state;
  }
};

export default auth;
