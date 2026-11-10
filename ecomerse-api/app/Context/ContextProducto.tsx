import { createContext } from "react";
import { Producto } from "../modelos/Producto";
import { Carrito } from '../modelos/Carrito'

export const ContexrProducto = createContext({
    producto: [] as Producto[],
    carritoProducto: [] as Carrito[],
    agregarCarrito: (producto: Producto, ordenCompra: number) => {},
    consultarProducto: () => { },
    agregarProducto: (producto: Producto) => { },
    eliminarProducto: (id: any) => { },
    editarProducto: (producto: Producto) => { },
    consultarCarrito: () => {},
    eliminarCarrito: (id: number) => {},
})