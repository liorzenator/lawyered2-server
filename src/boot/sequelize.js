const { Sequelize } = require('sequelize');

// Create a new Sequelize instance and connect to the database
export const sequelize = new Sequelize('postgres', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
});