const pg = require("pg");

const pool = new pg.Pool({
  host: "localhost",
  port: 5432,
  database: "react_shopping_list",
});

module.exports = pool;
