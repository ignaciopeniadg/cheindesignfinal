import './itemListContainer.css'
import ItemContador, { ItemContador } from '../ItemContador/ItemContador'
import React from 'react'

export const ItemListContainer = ({ texto }) => {
    const onAdd = (quantity) => {
        console.log('compraste ${quantity} unidades')
    }

    return (
        <>
            <ItemContador initial={1} />

        </>
    )
}

export default ItemListContainer