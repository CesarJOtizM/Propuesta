import { conn } from '../utils/dbConfig';

//show All cart
const getAlCarts = async (req, res) => {
  let sql = 'SELECT * FROM cart';
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, error: null, response: results }));
  });
};

//show single cart
const getSingleCart = async (req, res) => {
  let sql = 'SELECT * FROM cart WHERE id=' + req.params.id;
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, error: null, response: results }));
  });
};

// add new cart
const addNewProductCart = async (req, res) => {
  let data = {
    productId: req.body.productId,
  };
  let sql = 'INSERT INTO products SET ?';
  let query = conn.query(sql, data, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, error: null, response: results }));
  });
};

//update cart
// const updateProduct = async (req, res) => {
//   let sql =
//     "UPDATE products SET name='" +
//     req.body.name +
//     "', stock='" +
//     req.body.stock +
//     "' WHERE id=" +
//     req.params.id;
//   console.log('sql: ', sql);
//   let query = conn.query(sql, (err, results) => {
//     if (err) throw err;
//     res.send(JSON.stringify({ status: 200, error: null, response: results }));
//   });
// };

//Delete cart
const deleteProductCart = async (req, res) => {
  let sql = 'DELETE FROM cart WHERE id=' + req.params.productId + '';
  console.log('sql: ', sql);
  let query = conn.query(sql, (err, results) => {
    if (err) throw err;
    res.send(JSON.stringify({ status: 200, error: null, response: results }));
  });
};

module.exports = {
  getAlCarts,
  getSingleCart,
  addNewProductCart,
  updateProduct,
  deleteProductCart,
  searchProduct,
};
