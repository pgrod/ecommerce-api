const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
    'ecommerce', //BD
    'root', //nombre de usuario de su BD
    'Admin123', // COntrasena de su BD
    {
        host: 'localhost', //servidor
        port: 3306, //puerto
        dialect: 'mysql' // dialecto
    }

)

sequelize.authenticate()
    .then(() => console.log('Conexion exitosa'))
    .catch((errr) => console.log(errr))

module.exports = sequelize