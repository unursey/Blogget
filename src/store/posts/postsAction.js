import {URL_API} from '../../api/const';
import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const postsRequestAsync = createAsyncThunk(
  'posts/fetch',
  (newPage, {getState}) => {
    const page = newPage || getState().posts.page;

    let num = getState().posts.num;
    const token = getState().tokenReducer.token;
    const after = getState().posts.after;
    const isLast = getState().posts.isLast;
    const oldPosts = getState().posts.posts;
    // const loading = getState().posts.loading;

    if (!token || isLast) return getState().posts;

    return axios(`${URL_API}/${page}?limit=10&${after ?
      `after=${after}` : ''}`,
    {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(({data}) => {
        let newPosts = data.data.children;

        if (after) {
          newPosts = [...oldPosts, ...data.data.children];
          num++;
          console.log('num: ', num);
        }

        return {posts: newPosts, after: data.data.after, num, page};
      })
      .catch((err) => ({error: err.toString()}));
  }
);
