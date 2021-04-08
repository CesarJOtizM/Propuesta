import React, { useState, useEffect } from 'react';
import Products from '../components/Products';
import axios from 'axios';
import styles from '../assets/styles/components/Home.module.scss';

const Home = () => {
  const [data, setData] = useState();
  console.log(data);
  useEffect(async () => {
    const result = await axios.get('http://localhost:5000/api/products');
    setData(result.data);
  }, []);

  if (!data) {
    return <p>Loading </p>;
  }
  return (
    <div className={styles.home}>
      {data.response.map((product) => (
        <Products
          key={product?.id}
          id={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default Home;
