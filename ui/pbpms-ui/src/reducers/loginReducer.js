import {LOGIN_SUCCESS,LOGIN_PENDING,LOGIN_ERROR } from "../actions/types";

const initialState = {
  isLoginSuccess:false,
  isLoginPending:true,
  loginError:null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
          ...state,
          isLoginSuccess:action.isLoginSuccess
      }
    case LOGIN_PENDING:
      return{
        ...state,
        isLoginPending:action.isLoginPending
      }
    case LOGIN_ERROR:
      return{
        ...state,
        loginError:action.loginError
      }
    default:
      return state;
  }
}
