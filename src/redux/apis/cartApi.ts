import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { cartType } from '../../types/cartType';

export const cartApi = createApi({
  reducerPath: 'cartApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: (builder) => ({
    getCartItems: builder.query<cartType[], string>({
      query: () => ({
        url: '/carts',
      }),
    }),
  }),
});

export const { useGetCartItemsQuery } = cartApi;
