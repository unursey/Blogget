import {createSlice} from '@reduxjs/toolkit';
import {commentsRequestAsync} from './commentsAction';

const initialState = {
  status: '',
  commentsData: [],
  error: '',
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: {
    [commentsRequestAsync.pending.type]: (state) => {
      state.status = 'loading';
      state.error = '';
    },
    [commentsRequestAsync.fulfilled.type]: (state, action) => {
      state.status = 'loaded';
      state.commentsData = action.payload.commentsData;
      state.error = '';
    },
    [commentsRequestAsync.rejected.type]: (state, action) => {
      state.status = 'error';
      state.error = action.error;
    },
  },
});

export default commentsSlice.reducer;

