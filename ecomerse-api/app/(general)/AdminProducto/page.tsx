'use client'
import { Producto } from '@/app/modelos/Producto'
import { useContextProducto } from '@/app/Provider/ProviderProducto';
import React, { useEffect, useState } from 'react'

export default function page() {

    const { consultarProducto, producto, agregarProducto, eliminarProducto, editarProducto } = useContextProducto()

    const [id, setID] = useState(0)
    const [nombre, setNombre] = useState('')
    const [precio, setPrecio] = useState('')
    const [isv, setIsv] = useState('')
    const [img, setImge] = useState('')

    useEffect(() => {
        consultarProducto();
    }, [])


    function crear() {

        let producto: Producto = {
            idProducto: 0,
            nombreProducto: nombre,
            precioProducto: parseInt(precio),
            isvProducto: parseInt(isv),
            imgProducto: img
        }

        if (nombre == '') {

            agregarProducto(producto)

        }
        else {

            producto.idProducto = id
            editarProducto(producto)
        }


    }

    function editar(producto: Producto) {
        setID(producto.idProducto)
        setNombre(producto.nombreProducto)
        setImge(producto.imgProducto)
        setIsv(producto.isvProducto.toString())
        setPrecio(producto.precioProducto.toString())
    }
    //useState
    //value, setvale onchanche
    //llamar la funcion agregarproducto

    return (
        <div className='container'>
            <div className='row'>

                <div className='col-md-6'>

                    <form className='form'>

                        <input type="text" placeholder='Nombre Producto' className='form-control'
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        /> <br />
                        <input type="text" placeholder='Precio Producto' className='form-control'
                            value={precio}
                            onChange={(e) => setPrecio(e.target.value)}
                        /> <br />
                        <input type="text" placeholder='Isv Producto' className='form-control'
                            value={isv}
                            onChange={(e) => setIsv(e.target.value)}
                        /> <br />
                        <input type="text" placeholder='Img Producto' className='form-control'
                            value={img}
                            onChange={(e) => setImge(e.target.value)} /><br />
                        <button type='button' className='btn btn-success' onClick={crear}>Guardar Producto</button>
                    </form>

                </div>
                <div className='col-md-6'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Id Producto</th>
                                <th>NOmbre Producto</th>
                                <th>Precio Producto</th>
                                <th>iSV Producto</th>
                                <th>IMG Producto</th>
                                <th>Opciones</th>
                            </tr>

                        </thead>


                        <tbody>
                            {
                                producto.map((producto: Producto) => (
                                    <tr key={producto.idProducto}>
                                        <td>{producto.idProducto}</td>
                                        <td>{producto.nombreProducto}</td>
                                        <td>{producto.precioProducto}</td>
                                        <td>{producto.isvProducto}</td>
                                        <td><img src={producto.imgProducto} alt="" /></td>
                                        <td>
                                            <button className='btn btn-info btn-sm' onClick={() => editar(producto)}>Editar</button>
                                            <button className='btn btn-danger btn-sm' onClick={() => eliminarProducto(producto.idProducto)}>Eliminar</button>
                                        </td>
                                    </tr>

                                ))
                            }
                        </tbody>
                    </table>

                </div>

            </div>

        </div>
    )
}
