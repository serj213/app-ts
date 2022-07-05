import React from 'react';
import { useSelector } from 'react-redux';
import { useGetCartItemsQuery } from '../redux/apis/cartApi';
import { cartSelector } from '../redux/slices/cartSlice';
import BoxCarts from '../Components/BoxCarts/BoxCarts';

import Cart from '../Components/Cart/Cart';

const Main: React.FC = () => {
  const { data: carts, isLoading } = useGetCartItemsQuery('');

  return isLoading ? (
    <div>Идёт загрузка</div>
  ) : (
    <BoxCarts>{carts && carts.map((cart) => <Cart key={cart.id} {...cart} />)}</BoxCarts>
  );
};

export default Main;
