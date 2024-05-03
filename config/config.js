require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.DB_user,
    "password": process.env.DB_pass,
    "database": process.env.DB_name,
    "host": "localhost",
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.DB_user,
    "password": process.env.DB_pass,
    "database": process.env.DB_name,
    "host": "localhost",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.DB_user,
    "password": process.env.DB_pass,
    "database": process.env.DB_name,
    "host": "localhost",
    "dialect": "mysql"
  }
}
