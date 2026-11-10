const express = require('express')
const Producto = require('./Modelos/Producto')
const Carrito = require('./Modelos/Carrito')
const coor = require('cors')

const app = express()

app.use(express.json())

app.use(coor())

//get, post, put, delete

// punto de entrada - url
// reque - response
// metodo 
// codigos de respuesta 200, 404, 500, 401, 403 , etc...

app.get('/producto', async (req, res) => {

    try {
        //select *from producto
        const producto = await Producto.findAll();

        if (producto.length > 0) {
            res.status(200).json(producto)
        }
        else {
            res.status(400).json({ 'mensjae': 'Sin productos para mostrar' })
        }

    } catch (error) {
        res.status(500).json({ 'error': error })
    }
})

app.post('/producto', async (req, res) => {

    try {
        //inser into producto values(?,??)
        console.log(req.body)
        const producto = await Producto.create(req.body);

        if (producto) {
            res.status(200).json(producto)
        }
        else {
            res.status(400).json({ 'mensjae': 'informacion de producto vacia' })
        }



    } catch (error) {
        res.status(500).json({ 'error': error })
    }

})

app.put('/producto/:id', async (req, res) => {

    //update producto set nombre=? where idproducto=?

    try {
        let idProducto = req.params.id

        console.log(idProducto)

        const [updated] = await Producto.update(req.body, {
            where: { idProducto: idProducto }
        });

        console.log(updated)
        if (updated > 0) {
            res.status(200).json({ mensaje: 'Se actualizó el producto' })
        } else {
            res.status(400).json({ mensaje: 'No se actualizó el producto' })
        }


    } catch (error) {
        res.status(500).json({ 'mensjae': error })
    }
})

app.delete('/producto/:id', async (req, res) => {


    try {
        //delete from producto where idproducto =? 

        const deleted = await Producto.destroy({
            where: { idProducto: req.params.id }
        })

        if (deleted) {
            res.status(200).json({ mensaje: 'Producto Eliminado' })
        }
        else {
            res.status(400).json({ 'mensjae': 'informacion de producto no se elimina' })
        }


    } catch (error) {
        res.status(500).json({ 'mensjae': error })
    }
})


app.get('/carrito', async (req, res) => {
    try {
        const carrito = await Carrito.findAll();

        if (carrito.length > 0) {
            res.status(200).json(carrito)
        } else {
            res.status(400).json({ mensaje: 'Sin productos en el carrito' })
        }

    } catch (error) {
        res.status(500).json({ error: error })
    }
})


app.post('/carrito', async (req, res) => {
    try {
        const carrito = await Carrito.create(req.body);

        if (carrito) {
            res.status(200).json(carrito)
        } else {
            res.status(400).json({ mensaje: 'No se agregó al carrito' })
        }

    } catch (error) {
        res.status(500).json({ error: error })
    }
})


app.put('/carrito/:id', async (req, res) => {
    try {
        const [updated] = await Carrito.update(req.body, {
            where: { idcarrito: req.params.id }
        });

        if (updated > 0) {
            res.status(200).json({ mensaje: 'Carrito actualizado' })
        } else {
            res.status(400).json({ mensaje: 'No se actualizó el carrito' })
        }

    } catch (error) {
        res.status(500).json({ error: error })
    }
})


app.delete('/carrito/:id', async (req, res) => {
    try {
        const deleted = await Carrito.destroy({
            where: { idcarrito: req.params.id }
        });

        if (deleted) {
            res.status(200).json({ mensaje: 'Producto eliminado del carrito' })
        } else {
            res.status(400).json({ mensaje: 'No se eliminó el producto' })
        }

    } catch (error) {
        res.status(500).json({ error: error })
    }
})


app.listen(5000, () => {
    console.log('Backend corriendo')
})