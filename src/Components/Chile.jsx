import React from 'react';
import styles from '../Assets/Styles/Components/Outstanding.module.scss';
import IntroSlider from './IntroSlider';

const data = [
  {
    title: 'Punta Arenas',
    imageUrl: 'https://d1onimipqrtfy1.cloudfront.net/cities/punta-arenas.jpg',
  },
  {
    title: 'Puerto Varas',
    imageUrl: 'https://d1onimipqrtfy1.cloudfront.net/cities/puerto-varas.jpg',
  },
  {
    title: 'Puerto Natales',
    imageUrl: 'https://d1onimipqrtfy1.cloudfront.net/cities/puerto-natales.jpg',
  },
];

const Chile = () => {
  return (
    <>
      <h2 className={styles.title}>Populares de Chile</h2>
      <IntroSlider data={data} />
    </>
  );
};

export default Chile;
