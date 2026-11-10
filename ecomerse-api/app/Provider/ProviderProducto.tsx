import React, { useContext, useState } from 'react'
import { Plantilla } from '../modelos/Plantilla'
import { Producto } from '../modelos/Producto'
import { ContexrProducto } from '../Context/ContextProducto';
import { Carrito } from '../modelos/Carrito'


export default function ProviderProducto({ children }: Plantilla) {

    const [producto, setProducto] = useState<Producto[]>([]);

const [carritoProducto, setCarritoProducto] = useState<Carrito[]>([]);
    

async function agregarCarrito(producto: Producto, ordenCompra: number) {
    try {
        const res = await fetch('http://localhost:5000/carrito', {
            method: 'POST',
            body: JSON.stringify({
                idproducto: producto.idProducto,
                isvProducto: producto.isvProducto,
                ordenCompra: ordenCompra
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (res.ok) {
            consultarCarrito()
            alert('Producto agregado al carrito')
        } else {
            alert('No se pudo agregar al carrito')
        }

    } catch (error) {
        alert('Error al agregar al carrito')
    }
}



    async function consultarProducto() {
        try {

            const res = await fetch('http://localhost:5000/producto')
            const data = await res.json()

            setProducto(data)
            // alert()

        } catch (error) {
            alert('Ocurrio un error al cargar los productos')
        }
    }

    async function agregarProducto(producto: Producto) {

        console.log(producto)

        try {

            const res = await fetch('http://localhost:5000/producto', {
                method: 'POST',
                body: JSON.stringify(producto),
                'headers': {
                    'Content-Type': 'application/json'
                }


            })
            const data = await res.json()

            consultarProducto()
            alert('Producto creado')
            //setProducto(data)

        } catch (error) {
            alert('Ocurrio un error al cargar los productos')
        }

    }

    async function editarProducto(producto: Producto) {

        console.log(producto)


        try {

            const res = await fetch('http://localhost:5000/producto/' + producto.idProducto, {
                method: 'PUT',
                body: JSON.stringify(producto),
                'headers': {
                    'Content-Type': 'application/json'
                }


            })
            const data = await res.json()

            consultarProducto()
            alert('Producto Actualizado')
            //setProducto(data)

        } catch (error) {
            alert('Ocurrio un error al cargar los productos')
        }

    }


    async function eliminarProducto(id: number) {

        console.log(producto)

        try {

            const res = await fetch('http://localhost:5000/producto/' + id, {
                method: 'DELETE',
                'headers': {
                    'Content-Type': 'application/json'
                }


            })
            const data = await res.json()

            consultarProducto()
            alert('Producto Eliminado')
            //setProducto(data)

        } catch (error) {
            alert('Ocurrio un error al cargar los productos')
        }

    }



async function eliminarCarrito(id: number) {
    try {
        const res = await fetch('http://localhost:5000/carrito/' + id, {
            method: 'DELETE'
        })

        if (res.ok) {
            consultarCarrito()
            alert('Producto eliminado del carrito')
        }

    } catch (error) {
        alert('Error al eliminar del carrito')
    }
}


async function consultarCarrito() {
    try {
        const res = await fetch('http://localhost:5000/carrito')
        const data = await res.json()

        if (res.ok) {
            setCarritoProducto(data)
        } else {
            setCarritoProducto([])
        }

    } catch (error) {
        console.log(error)
    }
}



    return (

<ContexrProducto.Provider value={{producto, carritoProducto, agregarCarrito, consultarProducto, agregarProducto, eliminarProducto, editarProducto, consultarCarrito, eliminarCarrito}}>
            {children}
        </ContexrProducto.Provider>
    )
}

export function useContextProducto() {
    return useContext(ContexrProducto)
}
