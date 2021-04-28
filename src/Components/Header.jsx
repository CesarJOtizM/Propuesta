import React from 'react';
import logo from '../Assets/Images/logo.svg';
import Styles from '../Assets/Styles/Components/Header.module.scss';

const Header = () => {
  return (
    <nav className={Styles.Navbar}>
      <img src={logo} alt='Logo Denomades' />
      <div className={Styles.Icons}>
        <i className='fas fa-shopping-cart'></i>
        <i className='fas fa-bars'></i>
      </div>
    </nav>
  );
};

export default Header;
