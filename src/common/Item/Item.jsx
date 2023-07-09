import React, { useContext } from 'react'
import './item.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../../App'


const Item = ({ info }) => {
    const nombre = useContext(CartContext);
    console.log('item: ', nombre);

    return (
        <Link to={`/detalle/${info.id}`} className='item__card'>
            <h4 id='item__nombre-servicio'>{info.nombre}</h4>
            <h5 id='item__precio-servicio'>${info.precio} USD</h5>
        </Link>
    )
}

export default Item