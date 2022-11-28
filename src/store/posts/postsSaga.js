// import {put, select, call, takeEvery} from 'redux-saga/effects';
// import {URL_API} from '../../api/const';
// import axios from 'axios';
// import {postsSlice} from './postsSlice';

// function* fetchPosts(newPage) {
//   const page = yield newPage.payload ||
//     select(state => state.postsReducer.page);

//   const token = yield select(state => state.tokenReducer.token);
//   const after = yield select(state => state.posts.after);
//   const isLast = yield select(state => state.posts.isLast);

//   if (!token || isLast) return;

//   try {
//     const request = yield call(axios, `${URL_API}/${page}?limit=10&${after ?
//       `after=${after}` : ''}`, {
//       headers: {
//         'Authorization': `bearer ${token}`,
//       },
//     });

//     yield put(postsSlice.actions.postsRequestSuccess(request.data.data));
//   } catch (e) {
//     yield put(postsSlice.actions.postsRequestError(e));
//   }
// }

// export function* watchPosts() {
//   yield takeEvery(postsSlice.actions.postsRequest, fetchPosts);
// }
