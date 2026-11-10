
const { DataTypes } = require('sequelize')
const sequelize = require('../db/connection')

const Carrito = sequelize.define('Carrito', {
    idcarrito: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idproducto: {
        type: DataTypes.INTEGER
    },
    isvProducto: {
        type: DataTypes.DOUBLE
    },
    ordenCompra: {
        type: DataTypes.INTEGER
    }
}, {
    tableName: 'carrito',
    timestamps: false
})

module.exports = Carrito
