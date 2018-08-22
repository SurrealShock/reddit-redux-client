import { FETCH_POSTS, FETCH_POST } from '../actions/types';

const initialState = {
  posts: [],
  post: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        posts: action.payload
      };
    case FETCH_POST:
      return {
        ...state,
        post: action.payload
      };
    default:
      return state;
  }
}
