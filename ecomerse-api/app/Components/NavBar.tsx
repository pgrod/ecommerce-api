'use client'
import Link from 'next/link'
import React from 'react'
import { useUsuario } from '../Provider/ProviderUsuario'
import { useContextProducto } from '../Provider/ProviderProducto'

export default function NavBar() {

    const { nombreUsuario } = useUsuario()
    const { carritoProducto } = useContextProducto()

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>

                <div className=" " id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" href="Producto" aria-disabled="true">Lista Producto</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " href="AdminProducto" aria-disabled="true">Administracion Producto</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " href="Carrito" aria-disabled="true">
                                <span className='badge bg-secondary'> {carritoProducto.length}</span>
                                Carrito
                            </Link>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link " aria-disabled="true"> {nombreUsuario}</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>

    )
}
