import React from 'react';
import { Link } from 'react-router-dom';

import styles from './header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.column}>
        <Link to="/">главная</Link>
      </div>
      <div className={styles.column}>
        <Link to="/basket">Корзина</Link>
      </div>
    </header>
  );
};

export default Header;
