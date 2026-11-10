
const { DataTypes } = require('sequelize')
const sequelize = require('../db/connection')

const Producto = sequelize.define('Producto', {
    idProducto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombreProducto: {
        type: DataTypes.STRING
    },
    precioProducto: {
        type: DataTypes.NUMBER
    },
    isvProducto: {
        type: DataTypes.NUMBER
    },
    imgProducto: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'Producto',
    timestamps: false
})

module.exports = Producto