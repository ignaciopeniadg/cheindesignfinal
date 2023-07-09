import React, {useState} from 'react'
import './itemDetail.css'
import ItemContador from '../ItemContador/ItemContador'
import { Link } from 'react-router-dom';

export const ItemDetail = ({ data }) => {
    const [goToCart, setGoToCart] = useState(false);

    const onAdd = (quantity) => {
        setGoToCart(true);
    }

    return (
        <a className='detail__card'>
            <h4 id='detail__nombre-servicio'>{data.nombre}</h4>
            <h5 id='detail__precio-servicio'>${data.precio} USD</h5>
            <div className='detail__descripcion-servicio'>
                <p>{data.descripcion}</p>
            </div>
            {
                goToCart
                ?<Link to='/carrito'>Terminar compra</Link>
                :<ItemContador initial={1} onAdd={onAdd} />
            }
        </a>
    )
}

export default ItemDetail