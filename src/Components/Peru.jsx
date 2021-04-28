import React from 'react';
import styles from '../Assets/Styles/Components/Outstanding.module.scss';
import IntroSlider from './IntroSlider';

const data = [
  {
    title: 'Cusco',
    imageUrl: 'https://d1onimipqrtfy1.cloudfront.net/cities/cusco.jpg',
  },
  {
    title: 'Arequipa',
    imageUrl: 'https://d1onimipqrtfy1.cloudfront.net/cities/arequipa.jpg',
  },
  {
    title: 'Puno',
    imageUrl: 'https://d1onimipqrtfy1.cloudfront.net/cities/puno.jpg',
  },
];

const Peru = () => {
  return (
    <>
      <h2 className={styles.title}>Populares de Peru</h2>
      <IntroSlider data={data} />
    </>
  );
};

export default Peru;
