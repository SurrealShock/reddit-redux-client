import { FETCH_POSTS } from './types';
import axios from 'axios';

export const fetchPosts = () => dispatch => {
  axios.get('https://www.reddit.com/.json').then(res =>
    dispatch({
      type: FETCH_POSTS,
      payload: res.data.data.children
    })
  );
};
