import { createSlice } from '@reduxjs/toolkit';
import { cartType } from '../../types/cartType';
import { RootState } from '../store';

interface cartSliceTypes {
  carts: cartType[];
  basket: cartType[];
}

const initialState: cartSliceTypes = {
  carts: [
    {
      id: 0,
      img: 'https://st.depositphotos.com/2547675/3009/i/450/depositphotos_30094505-stock-photo-time-clock.jpg',
      title: 'Какой то заголовок',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae dolorum architecto ducimus magnam repellat. Laboriosam, atque illum nesciunt quam explicabo nostrum optio dignissimos, rerum deleniti reprehenderit tempore nulla, corporis soluta?',
      count: 1,
    },

    {
      id: 1,
      img: 'https://avatars.mds.yandex.net/i?id=dc7361b95e9b0527c543cbb558a72055_l-5878560-images-thumbs&n=27&h=384&w=480',
      title: 'Второй заголовок',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae dolorum architecto ducimus magnam repellat. Laboriosam, atque illum nesciunt quam explicabo nostrum optio dignissimos, rerum deleniti reprehenderit tempore nulla, corporis soluta?',
      count: 1,
    },

    {
      id: 2,
      img: 'https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg',
      title: 'Третий заголовок',
      text: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae dolorum architecto ducimus magnam repellat. Laboriosam, atque illum nesciunt quam explicabo nostrum optio dignissimos, rerum deleniti reprehenderit tempore nulla, corporis soluta?',
      count: 1,
    },
  ],
  basket: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart(state, action) {},
  },
});

export const cartSelector = (state: RootState) => state.carts.carts;

// export const { addCart } = cartSlice.actions;

export default cartSlice.reducer;
