import React from 'react';
import { useDispatch } from 'react-redux';
import { cartType } from '../../types/cartType';
import { addCart } from '../../redux/slices/basketSlice';

import styles from './cart.module.scss';

const Cart: React.FC<cartType> = ({ id, img, title, text }) => {
  const dispatch = useDispatch();

  const addedCart = () => {
    const obj = { id, img, title, text, count: 1 };
    dispatch(addCart(obj));
  };

  return (
    <div className={styles.cart}>
      <img src={img} alt="" />
      <div className={styles.cart__content}>
        <h4>{title}</h4>
        <p>{text}</p>

        <button onClick={addedCart}>Добавить</button>
      </div>
    </div>
  );
};

export default Cart;
