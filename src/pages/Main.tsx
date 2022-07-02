import React from 'react';
import { useSelector } from 'react-redux';

import { cartSelector } from '../redux/slices/cartSlice';
import BoxCarts from '../Components/BoxCarts/BoxCarts';

import Cart from '../Components/Cart/Cart';

const Main: React.FC = () => {
  const carts = useSelector(cartSelector);

  return (
    <BoxCarts>{carts.length > 0 && carts.map((cart) => <Cart key={cart.id} {...cart} />)}</BoxCarts>
  );
};

export default Main;
