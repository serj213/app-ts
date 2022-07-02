import React from 'react';

import styles from './basketNull.module.scss';

const BasketNull: React.FC = () => {
  return (
    <div className={styles.basketNull}>
      <h2>Корзина пустая</h2>
    </div>
  );
};

export default BasketNull;
