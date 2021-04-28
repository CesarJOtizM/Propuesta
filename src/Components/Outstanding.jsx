import React from 'react';
import styles from '../Assets/Styles/Components/Outstanding.module.scss';
import IntroSlider from './IntroSlider';

const data = [
  {
    title: 'San Pedro de Atacama',
    imageUrl:
      'https://denomades.imgix.net/home/laguna-tebenquinche-es.jpg?w=750&h=500&fit=crop&q=auto&auto=format',
  },
  {
    title: 'Torres de Paine',
    imageUrl:
      'https://denomades.imgix.net/home/circuito-w-torres-del-paine.jpg?w=750&h=500&fit=crop&q=auto&auto=format',
  },
  {
    title: 'Machu Picchu',
    imageUrl:
      'https://denomades.imgix.net/home/IMG_20190611_085449.jpg?w=750&h=500&fit=crop&q=auto&auto=format',
  },
];

const Outstanding = () => {
  return (
    <>
      <h2 className={styles.title}>Destacados</h2>
      <IntroSlider data={data} />
    </>
  );
};

export default Outstanding;
