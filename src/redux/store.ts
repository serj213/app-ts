import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slices/cartSlice';
import basketSlice from './slices/basketSlice';
import { cartApi } from './apis/cartApi';
import { basketApi } from './apis/basketApi';

const middleware = [cartApi.middleware];

export const store = configureStore({
  reducer: {
    carts: cartSlice,
    basket: basketSlice,
    [cartApi.reducerPath]: cartApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
