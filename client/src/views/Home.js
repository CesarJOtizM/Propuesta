import React from 'react';
import Products from '../components/Products';
import styles from '../assets/styles/components/Home.module.scss';

const Home = () => {
  return (
    <div className={styles.home}>
      <Products />
      <Products />
      <Products />
      <Products />
      <Products />
      <Products />
      <Products />
    </div>
  );
};

export default Home;
