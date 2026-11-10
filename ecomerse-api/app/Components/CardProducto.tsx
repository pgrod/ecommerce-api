'use client'

import React, { useState } from 'react'
import { Producto } from '../modelos/Producto'
import { useContextProducto } from '../Provider/ProviderProducto'

export default function CardProducto(producto: Producto) {

    const { agregarCarrito } = useContextProducto()

    const [ordenCompra, setOrdenCompra] = useState(1);

    return (
        <div className='card'>
            <div className='card-header'>
                {producto.nombreProducto}
            </div>

            <div className='card-body'>
                <p>Precio Producto - Lps {producto.precioProducto}</p>
                <p>Isv Producto - Lps {producto.isvProducto}</p>

                <img src={producto.imgProducto} />

                <label>Numero de Orden:</label>

                <input
                    type="number"
                    className="form-control"
                    min={1}
                    value={ordenCompra}
                    onChange={(e) => setOrdenCompra(Number(e.target.value))}
                />
            </div>

            <div className='card-footer'>
                <button
                    className='btn btn-info btn-sm'
                    onClick={() => agregarCarrito(producto, ordenCompra)}
                >
                    Agregar al Carrito
                </button>

                <button className='btn btn-danger btn-sm'>
                    Eliminar
                </button>
            </div>
        </div>
    )
}
