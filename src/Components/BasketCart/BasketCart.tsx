import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteCart, addCart, onMinusCart } from '../../redux/slices/basketSlice';
import { cartType } from '../../types/cartType';

import styles from './basketCart.module.scss';

interface BasketCartType {
  id: number;
  img: string;
  title: string;
  text: string;
  count: number;
}

const BasketCart: React.FC<BasketCartType> = ({ id, img, title, text, count }) => {
  const dispatch = useDispatch();

  const onRemoveCart = (id: number) => {
    dispatch(deleteCart(id));
  };

  const onPlusCart = () => {
    dispatch(addCart({ id } as cartType));
  };

  const minusCart = () => {
    dispatch(onMinusCart(id));
  };

  return (
    <div className={styles.basketCart}>
      <div className={styles.basketCart__img}>
        <img src={img} alt="" />
      </div>

      <div className={styles.basketCart__content}>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>

      <div className={styles.basketCart__info}>
        <div className={styles.basketCart__infoTop}>
          <button onClick={onPlusCart}>+</button>
          <p>{count}</p>
          <button onClick={minusCart}>-</button>
        </div>
        <div className={styles.basketCart__infoBottom}>
          <button onClick={() => onRemoveCart(id)}>Удалить</button>
        </div>
      </div>
    </div>
  );
};

export default BasketCart;
