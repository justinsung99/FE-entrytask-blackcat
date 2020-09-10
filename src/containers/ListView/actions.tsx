import { FETCH_POST_LIST, FETCH_POST_LIST_FAILED, FETCH_POST_LIST_SUCCESS } from './constants';

import { generatePostList } from '../../seeders';

export function fetchPostList() {
  return (dispatch: (arg0: { type: string; payload?: any }) => void) => {
    dispatch({ type: FETCH_POST_LIST });

    // mock api behaviour by timeout
    setTimeout(() => {
      const response = generatePostList();
      return dispatch({
        type: FETCH_POST_LIST_SUCCESS,
        payload: response,
      });
    }, 1000);
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
