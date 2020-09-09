import { fromJS } from 'immutable';

import {
  // LOGIN,
  LOGIN_SUCCESS,
  // LOGIN_FAILED,
  CLEAR_LOGIN,
  // LOGOUT,
  // LOGOUT_SUCCESS,
  // LOGOUT_FAILED,
  // CLEAR_LOGOUT
} from './constants';

const initialState = fromJS({
  isLoading: false,
  isLoginSuccess: null,
  loginResponse: null,
});

export default function loginViewReducer(state = initialState, action: any) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return state.set('isLoginSuccess', true).set('loginResponse', action.payload);

    case CLEAR_LOGIN:
      return state.set('isLoginSuccess', null).set('loginResponse', null);

    default:
      return state;
  }
}
