import React from 'react';

import styles from './title.module.scss';

interface titleProp {
  children: React.ReactNode;
}

const Title: React.FC<titleProp> = ({ children }) => {
  return <h1 className={styles.title}>{children}</h1>;
};

export default Title;
