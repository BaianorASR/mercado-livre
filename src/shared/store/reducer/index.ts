import { configureStore } from '@reduxjs/toolkit';

import cart from '../actions/cart.action';
import products from '../actions/products.action';
import query from '../actions/query.action';
import theme from '../actions/theme.action';

export const store = configureStore({
  reducer: { cart, query, theme, products },
  devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
