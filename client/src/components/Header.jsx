import React from 'react';
import { Link } from '@reach/router';
import Logo from '../assets/images/a9342925a255495a983a575cb4788290.png';
import styles from '../assets/styles/components/Header.module.scss';

const header = () => {
  return (
    <div className={styles.header}>
      <Link className={styles.logo} to='/'>
        <img src={Logo} alt='Verduleria' />
      </Link>
      <ul className={styles.menu}>
        <li>
          <i className='fas fa-home'></i>
        </li>
        <li>
          <i className='fas fa-user'></i>
        </li>
        <li>
          <i className='fas fa-shopping-cart'></i>
        </li>
      </ul>
    </div>
  );
};

export default header;
