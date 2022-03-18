import { createSlice } from '@reduxjs/toolkit';

import { ApiProductsResponse } from '../../services/api/@types';
import { InitialProductsState } from './types/products';

export const products = createSlice({
  name: 'products',
  initialState: { items: {} } as InitialProductsState<ApiProductsResponse>,
  reducers: {
    actionProducts: (_state, { payload }) => ({ items: payload }),
  },
});

export const { actionProducts } = products.actions;

export default products.reducer;
