import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {URL_API} from '../../api/const';

export const commentsRequestAsync = createAsyncThunk(
  'comments/fetch',
  (id, {getState}) => {
    const token = getState().tokenReducer.token;
    if (!token) return getState().comments;

    return axios(`${URL_API}/comments/${id}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((result) => {
        const post = result.data[0].data.children[0].data;
        const comments = result.data[1].data.children
          .filter((item) => item.kind !== 'more')
          .filter((item) => item.data.author !== '[deleted]')
          .map(item => item.data);
        const commentsData = [post, comments];
        return {commentsData};
      },
      )
      .catch((error) => ({error: error.toString()}));
  },
);
