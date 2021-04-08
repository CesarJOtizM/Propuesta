import { conn } from '../utils/dbConfig';

//show All Product
const getAllProducts = async (req, res) => {
  let sql = 'SELECT * FROM products';
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, error: null, response: results }));
  });
};

//show single Product
const getSingleProduct = async (req, res) => {
  let sql = 'SELECT * FROM products WHERE id=' + req.params.id;
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, error: null, response: results }));
  });
};

// add new Product
const addNewProduct = async (req, res) => {
  let data = {
    name: req.body.name,
    image: req.body.image,
    price: req.body.price,
    description: req.body.description,
    stock: req.body.stock,
  };
  let sql = 'INSERT INTO products SET ?';
  let query = conn.query(sql, data, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, error: null, response: results }));
  });
};

//update Product
const updateProduct = async (req, res) => {
  let sql =
    "UPDATE products SET name='" +
    req.body.name +
    "', stock='" +
    req.body.stock +
    "', image='" +
    req.body.image +
    "', price='" +
    req.body.price +
    "', description='" +
    req.body.description +
    "' WHERE id=" +
    req.params.id;
  console.log('sql: ', sql);
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, error: null, response: results }));
  });
};

//Delete Product
const deleteProduct = async (req, res) => {
  let sql = 'DELETE FROM products WHERE id=' + req.params.id + '';
  console.log('sql: ', sql);
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, error: null, response: results }));
  });
};

//Search Product
const searchProduct = (req, res) => {
  let sql = "SELECT * FROM products WHERE name='" + req.params.name + "'";
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, error: null, response: results }));
  });
};

module.exports = {
  getAllProducts,
  getSingleProduct,
  addNewProduct,
  updateProduct,
  deleteProduct,
  searchProduct,
};
