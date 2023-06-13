import './itemContador.css';

import React, { useState } from 'react';

export const ItemContador = () => {
    const [count, setCount] = useState(1);

    const decrease = () => {
        if (count <= 1) {
            setCount(count + 0)
        } else {
        setCount(count - 1)}
    }

    const increase = () => {
        setCount(count + 1);
    }

    return (
        <div className='contador'>
            <div className='contador__botones'>
                <a className='btn__contador' disabled={count <= 1} onClick={decrease}>-</a>
                <span className='num__contador'>{count}</span>
                <a className='btn__contador' onClick={increase}>+</a>
            </div>
            <div>
                <button className='btn__agregar-al-carrito'>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemContador