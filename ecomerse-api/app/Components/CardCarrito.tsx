
'use client'

import React from 'react'
import { Carrito } from '../modelos/Carrito'
import { Producto } from '../modelos/Producto'

interface Props {
    carrito: Carrito;
    producto: Producto;
    eliminarCarrito: (id: number) => void;
}

export default function CardCarrito({ carrito, producto, eliminarCarrito }: Props) {

    return (
        <div className="card p-3">
            <h5>{producto.nombreProducto}</h5>

            <p>Precio: L. {producto.precioProducto}</p>

            <p>ISV: L. {carrito.isvProducto}</p>

            <p>
                Total: L. {producto.precioProducto + carrito.isvProducto}
            </p>

            <button
                className="btn btn-danger"
                onClick={() => eliminarCarrito(carrito.idcarrito)}
            >
                Eliminar
            </button>
        </div>
    )
}
