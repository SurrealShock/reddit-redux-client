import { FETCH_POSTS } from './types';
import axios from 'axios';

export const fetchPosts = url => dispatch => {
  sessionStorage.getItem(url)
    ? dispatch({
        type: FETCH_POSTS,
        payload: JSON.parse(sessionStorage.getItem(url))
      })
    : axios.get(url).then(res => {
        console.log('fetched from url');
        sessionStorage.setItem(url, JSON.stringify(res.data));
        dispatch({
          type: FETCH_POSTS,
          payload: res.data
        });
      });
};
