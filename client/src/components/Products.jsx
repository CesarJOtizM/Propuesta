import React from 'react';
import { Link } from '@reach/router';
import styles from '../assets/styles/components/Product.module.scss';

const Products = ({ id, image, name, price }) => {
  return (
    <div className={styles.cart}>
      <img className={styles.img} src={image} alt={name} />
      <div className={styles.body}>
        <h2>{name}</h2>
        <p>Precio: {price}</p>
        <div className={styles.footeer}>
          <div>
            <Link to={`/prodcuts/${id}`}>Detalle</Link>
          </div>
          <div> Agregar al carro</div>
        </div>
      </div>
    </div>
  );
};

export default Products;
