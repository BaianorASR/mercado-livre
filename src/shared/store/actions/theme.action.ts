import { createSlice } from '@reduxjs/toolkit';

export const theme = createSlice({
  name: 'theme',
  initialState: { dark_theme: false },
  reducers: {
    setToggleChecked: (state, { payload }) => ({ dark_theme: payload }),
  },
});

export const { setToggleChecked } = theme.actions;

export default theme.reducer;
