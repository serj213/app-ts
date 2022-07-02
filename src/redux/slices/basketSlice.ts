import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { cartType } from '../../types/cartType';
import { RootState } from '../store';

interface basketSliceTypes {
  basketItems: cartType[];
}

const initialState: basketSliceTypes = {
  basketItems: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addCart(state, action: PayloadAction<cartType>) {
      const findObj = state.basketItems.find((cart) => cart.id === action.payload.id);

      if (findObj) {
        findObj.count++;
      } else {
        state.basketItems.push(action.payload);
      }
    },

    onMinusCart(state, action: PayloadAction<number>) {
      const findObj = state.basketItems.find(({ id }) => id === action.payload);

      if (findObj) {
        findObj.count > 1 && findObj.count--;
      }
    },

    deleteCart(state, action: PayloadAction<number>) {
      state.basketItems = state.basketItems.filter((cart) => cart.id !== action.payload);
    },
  },
});

export const BasketSelector = (state: RootState) => state.basket.basketItems;

export const { addCart, deleteCart, onMinusCart } = basketSlice.actions;

export default basketSlice.reducer;
