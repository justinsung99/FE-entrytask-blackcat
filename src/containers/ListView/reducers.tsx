import { fromJS } from 'immutable';

import { FETCH_POST_LIST, FETCH_POST_LIST_SUCCESS, FETCH_POST_LIST_FAILED } from './constants';

const initialState = fromJS({
  isLoading: false,
  isFetchPostListSuccess: null,
  fetchPostListResponse: null,
});

export default function ListViewReducer(state = initialState, action: any) {
  switch (action.type) {
    case FETCH_POST_LIST:
      return state.set('isLoading', true);

    case FETCH_POST_LIST_SUCCESS:
      return state
        .set('isFetchPostListSuccess', true)
        .set('fetchPostListResponse', action.payload)
        .set('isLoading', false);

    // case CLEAR_FETCH_POST_LIST:
    //   return state.set('isFetchPostListSuccess', null).set('fetchPostListResponse', null);

    default:
      return state;
  }
}
