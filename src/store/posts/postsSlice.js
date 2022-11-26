import {createSlice} from '@reduxjs/toolkit';
import {postsRequestAsync} from './postsAction';

const initialState = {
  loading: false,
  posts: [],
  error: '',
  after: '',
  isLast: false,
  page: '',
  num: 0,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.posts = [];
      state.after = '';
      state.page = action.payload;
      state.isLast = false;
      state.num = 0;
    },
  },
  extraReducers: {
    [postsRequestAsync.pending.type]: (state) => {
      state.loading = true;
      state.error = '';
    },
    [postsRequestAsync.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.posts = action.payload.posts;
      state.error = '';
      state.after = action.payload.after;
      state.isLast = !action.payload.after;
      state.num = action.payload.num;
    },
    [postsRequestAsync.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  },
});

export default postsSlice.reducer;
