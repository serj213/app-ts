import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './slices/cartSlice';
import basketSlice from './slices/basketSlice';

export const store = configureStore({
  reducer: {
    carts: cartSlice,
    basket: basketSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
