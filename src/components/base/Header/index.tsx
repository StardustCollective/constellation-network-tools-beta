import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss';

export const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
        <Link to="/">
          <img
            className={styles.logo}
            src="/images/logo.svg"
            alt="logo"
            width="144"
            height="36"
          />
        </Link>
        <span className={styles.title}>Network Tools</span>
      </div>
    </div>
  );
};
