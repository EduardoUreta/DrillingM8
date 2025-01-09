// db.config.cjs
require('dotenv').config();

const envConfig = {
  "username": process.env.PG_USERNAME,
  "password": process.env.PG_PASSWORD,
  "database": process.env.PG_DATABASE,
  "host": process.env.PG_HOST,
  "dialect": "postgres",
  "port": process.env.PG_PORT,
};

module.exports = envConfig;
