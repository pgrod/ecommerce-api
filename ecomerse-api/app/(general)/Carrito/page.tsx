
'use client'

import React, { useEffect, useState } from 'react'
import CardCarrito from '@/app/Components/CardCarrito'
import { useContextProducto } from '@/app/Provider/ProviderProducto'

export default function page() {

    const [ordenCompra, setOrdenCompra] = useState(1);
    const {
        producto,
        carritoProducto,
        consultarProducto,
        consultarCarrito,
        eliminarCarrito
    } = useContextProducto();

    useEffect(() => {
        consultarProducto()
        consultarCarrito()
    }, [])


    
function calcularTotal() {
    let total = 0;

    carritoProducto.map((carrito) => {

        if (carrito.ordenCompra === ordenCompra) {

            const productoEncontrado = producto.find(
                (p) => p.idProducto === carrito.idproducto
            )

            if (productoEncontrado) {
                total = total + productoEncontrado.precioProducto + carrito.isvProducto
            }
        }
    })

        return total;
    }

    return (
        <div className="container">
            <h2>Carrito de Compras</h2>

            <div className="row">
                {
                    carritoProducto.map((carrito) => {

                        const productoEncontrado = producto.find(
                            (p) => p.idProducto === carrito.idproducto
                        )

                        if (productoEncontrado) {
                            return (
                                <div
                                    className="col-md-4"
                                    key={carrito.idcarrito}
                                >
                                    <CardCarrito
                                        carrito={carrito}
                                        producto={productoEncontrado}
                                        eliminarCarrito={eliminarCarrito}
                                    />
                                    <br />
                                </div>
                            )
                        }

                        return null
                    })
                }
            </div>


<div className="mb-3">
    <label>Numero de Orden:</label>

    <input
        type="number"
        className="form-control"
        value={ordenCompra}
        min={1}
        onChange={(e) => setOrdenCompra(Number(e.target.value))}
    />
</div>


<h3>Total a Pagar: L. {calcularTotal().toFixed(2)}</h3>

<button
    className="btn btn-success"
    onClick={() => alert('Total a pagar: L. ' + calcularTotal().toFixed(2))}
>
    Pagar
</button>

        </div>
    )
}
