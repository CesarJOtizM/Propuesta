import React from 'react';
import { Link } from '@reach/router';
import styles from '../assets/styles/components/Product.module.scss';

const Products = ({ id }) => {
  return (
    <div className={styles.cart}>
      <img
        className={styles.img}
        src='https://res.cloudinary.com/csarotz/image/upload/v1617911606/manzanas_a5h28v.jpg'
        alt='manzana'
      />
      <div className={styles.body}>
        <Link to={`/prodcuts/${id}`}>Manzanas</Link>
        <p>Precio: $ 20.000</p>
        <div className={styles.footeer}>
          <div className={styles.boder}>Detalle</div>
          <div> Agregar al carro</div>
        </div>
      </div>
    </div>
  );
};

export default Products;
