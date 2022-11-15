import axios from 'axios';
import {URL_API} from '../../api/const';

export const COMMENTS_REQUEST = 'COMMENTS_REQUEST';
export const COMMENTS_REQUEST_SUCCESS = 'COMMENTS_REQUEST_SUCCESS';
export const COMMENTS_REQUEST_ERROR = 'COMMENTS_REQUEST_ERROR';

export const commentsRequest = () => ({
  type: COMMENTS_REQUEST,
});

export const commentsRequestSuccess = (commentsData) => ({
  type: COMMENTS_REQUEST_SUCCESS,
  commentsData,
});

export const commentsRequestError = (error) => ({
  type: COMMENTS_REQUEST_ERROR,
  error,
});

export const commentsRequestAsync = (id) => (dispatch, getState) => {
  const token = getState().tokenReducer.token;
  if (!token) return;
  dispatch(commentsRequest());

  axios(`${URL_API}/comments/${id}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then((result) => {
      console.log('result: ', result);
      const post = result.data[0].data.children[0].data;
      const comments = result.data[1].data.children
        .filter((item) => item.kind !== 'more')
        .filter((item) => item.data.author !== '[deleted]')
        .map(item => item.data);
      const commentsData = [post, comments];
      console.log('commentsData: ', commentsData);
      dispatch(commentsRequestSuccess(commentsData));
    },
    )
    .catch(err => {
      dispatch(commentsRequestError(err.toString()));
    });
};
