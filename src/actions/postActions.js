import { FETCH_POSTS, FETCH_POST } from './types';
import axios from 'axios';

export const fetchPosts = url => dispatch => {
  sessionStorage.getItem(url)
    ? dispatch({
        type: FETCH_POSTS,
        payload: JSON.parse(sessionStorage.getItem(url))
      })
    : axios.get(url).then(res => {
        console.log('fetched from url');
        sessionStorage.setItem(url, JSON.stringify(res.data.data.children));
        dispatch({
          type: FETCH_POSTS,
          payload: res.data.data.children
        });
      });
};

export const fetchPost = url => dispatch => {
  sessionStorage.getItem(url)
    ? dispatch({
        type: FETCH_POST,
        payload: JSON.parse(sessionStorage.getItem(url))
      })
    : axios.get(url).then(res => {
        console.log('fetched from url');
        sessionStorage.setItem(url, JSON.stringify(res.data));
        dispatch({
          type: FETCH_POST,
          payload: res.data
        });
      });
};
