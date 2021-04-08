const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

import db from './models/index';
import faker from 'faker';
import times from 'lodash.times';
import random from 'lodash.random';

import {
  getAllProducts,
  getSingleProduct,
  addNewProduct,
  updateProduct,
  deleteProduct,
} from './APIs/products';

// Products
app.get('/api/products', getAllProducts);
app.get('/api/product/:id', getSingleProduct);
app.post('/api/product', addNewProduct);
app.put('/api/product/:id', updateProduct);
app.delete('/api/product/:id', deleteProduct);

// cart
// app.get('/api/carts', cache(10), getAllcarts);
// app.get('/api/cart/:id', getSinglecart);
// app.put('/api/cart/:id', updatecart);
// app.delete('/api/cart/:id', deletecart);

//Server listening
db.sequelize.sync().then(() => {
  // populate company table with dummy data
  db.products.bulkCreate(
    times(10, () => ({
      name: faker.name.firstName(),
      stock: random(1, 10),
      image: faker.image.imageUrl(),
      price: random(100, 1000),
      description: faker.lorem.text(),
    }))
  );
  // populate employee table with dummy data
  db.cart.bulkCreate(
    times(3, () => ({
      productId: random(1, 10),
      quantity: random(1, 10),
    }))
  );

  app.listen(5000, () => {
    console.log('🚀 Server started on port http://localhost:5000...');
  });
});
