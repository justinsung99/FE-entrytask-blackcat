// import axios from "axios";

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

// import {
//   loginApi,
//   logoutApi
// } from 'api';

// import swal from 'sweetalert';

export function login(data: any) {
  return (dispatch: (arg0: { type: string; payload?: any }) => void) => {
    return dispatch({ type: LOGIN_SUCCESS, payload: data }); // mock response by return data

    // return axios
    //   .post(loginApi, data)
    //   .then(response => {
    //     dispatch({
    //       type: LOGIN_SUCCESS,
    //       payload: response
    //     });
    //     swal("Sucess!", "You are successfully logged in","success");
    //   })
    //   .catch(error => {
    //     dispatch({
    //       type: LOGIN_FAILED,
    //       payload: error
    //     });
    //     console.log(error)
    //     swal("Error", JSON.stringify(error.message), "error")
    //   });
  };
}

// export function logout() {
//   return (dispatch: (arg0: { type: string; payload?: any; }) => void) => {
//     dispatch({ type: LOGOUT })
//     axios.get(logoutApi)
//       .then(response => {
//         dispatch({
//           type: LOGOUT_SUCCESS,
//           payload: response
//         });

//       })
//       .catch(error=> {
//         dispatch({
//           type: LOGOUT_FAILED,
//           payload: error
//         });
//         console.log(error)
//         swal("Error", JSON.stringify(error.message), "error")
//       })
//   }
// }

export function clearLogin() {
  return (dispatch: (arg0: { type: string }) => void) => {
    dispatch({ type: CLEAR_LOGIN });
  };
}

// export function clearLogout() {
//   return (dispatch: (arg0: { type: string; }) => void) => {
//     dispatch({ type: CLEAR_LOGOUT });
//   };
