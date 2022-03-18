import { createSlice } from '@reduxjs/toolkit';

export const cart = createSlice({
  name: 'cart',
  initialState: { cart: '' },
  reducers: {
    setCart: (_state, { payload }) => ({ cart: payload }),
  },
});

export default cart.reducer;
