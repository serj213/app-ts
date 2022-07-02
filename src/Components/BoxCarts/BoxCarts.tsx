import React from 'react';
import styles from './boxCarts.module.scss';

interface boxCartsProps {
  children: React.ReactNode;
}

const BoxCarts: React.FC<boxCartsProps> = ({ children }) => {
  return <div className={styles.box}>{children}</div>;
};

export default BoxCarts;
