import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { cartType } from '../../types/cartType';

export const basketApi = createApi({
  reducerPath: 'basketApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  endpoints: (builder) => ({
    getbasketItems: builder.query<cartType[], cartType>({
      query: () => ({
        url: '/basketItems',
      }),
    }),
  }),
});

export const { useGetbasketItemsQuery } = basketApi;
