const db = require("../database/db.js");

const select_products = db.prepare(/*sql*/ `
    SELECT id, name, quantity_per_unit, unit_price, units_in_stock, units_on_order FROM products
`);

function listProducts() {
  return select_products.all();
}

const search_products = db.prepare(/*sql*/ `
 SELECT id, name FROM products WHERE name LIKE ?`);

function searchProducts(str) {
  return search_products.all(`%${str}%`);
}

module.exports = { listProducts, searchProducts };
