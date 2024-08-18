const { DataTypes } = require('sequelize');
const { sequelize } = require('../boot/sequelize'); // Import the sequelize instance


const Client = sequelize.define('clients', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    comments: {
        type: DataTypes.STRING,
        allowNull: true
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false
    },

}, {
    timestamps: true, // Adds createdAt and updatedAt fields
    tableName: 'clients', // Specifies the table name
});

module.exports = Client; // Export the model