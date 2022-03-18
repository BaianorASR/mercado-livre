import { createSlice } from '@reduxjs/toolkit';

import { InitialQueryState } from './types/query';

export const query = createSlice({
  name: 'query',
  initialState: { category: '', query: '' } as InitialQueryState,
  reducers: {
    actionQuery: (state, { payload }) => payload,
  },
});

export const { actionQuery } = query.actions;

export default query.reducer;
