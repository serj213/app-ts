import React from 'react';
import { useSelector } from 'react-redux';

import { BasketSelector } from '../../redux/slices/basketSlice';
import BasketCart from '../BasketCart/BasketCart';
import Title from '../Title/Title';

import styles from './basket.module.scss';

const Basket: React.FC = () => {
  const basketItems = useSelector(BasketSelector);

  return (
    <div className={styles.basket}>
      <Title>Корзина</Title>

      <div className={styles.basket__box}>
        {basketItems.length > 0
          ? basketItems.map((item) => {
              return <BasketCart key={item.id} {...item} />;
            })
          : 'Корзина пустая'}
      </div>
    </div>
  );
};

export default Basket;
