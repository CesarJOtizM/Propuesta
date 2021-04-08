import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Products from '../components/Products';

const Detail = ({ id }) => {
  const [product, setProduct] = useState();
  console.log(product);

  useEffect(async () => {
    const result = await axios.get(`http://localhost:5000/api/product/${id}`);
    setProduct(result.data);
  }, []);

  if (!product) {
    return <p>Loading </p>;
  }
  return <div>hello</div>;
};
export default Detail;
