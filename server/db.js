const { Sequelize } = require('sequelize');


const sequelize = new Sequelize(... {
  dialectOptions: {
    ssl: process.env.NODE_ENV === 'production' ? { require: true } : false
  },
  logging: console.log // Включить логи SQL
});(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
  }
);

module.exports = sequelize;
