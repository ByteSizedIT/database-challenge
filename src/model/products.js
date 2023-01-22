const db = require("../database/db.js");

// Challenge 1
const select_products = db.prepare(/*sql*/ `
    SELECT id, name, quantity_per_unit, unit_price, units_in_stock, units_on_order FROM products
`);

function listProducts() {
  return select_products.all();
}

// Challenge 2
const search_products = db.prepare(/*sql*/ `
 SELECT id, name FROM products WHERE name LIKE ?`);

function searchProducts(str) {
  return search_products.all(`%${str}%`);
}

// Challenge 3
const get_product = db.prepare(/*sql*/ `
    SELECT id, name FROM products WHERE id = ? 
`);

function getProduct(id) {
  return get_product.get(id);
}

module.exports = { listProducts, searchProducts, getProduct };
