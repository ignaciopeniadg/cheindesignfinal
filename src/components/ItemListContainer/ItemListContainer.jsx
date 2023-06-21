import './itemListContainer.css'
import { useParams } from 'react-router-dom'
import React from 'react'

const ItemListContainer = () => {
    const { id } = useParams();

    return (
        <>
            <div>Item List Container : {id}</div>

        </>
    )
}

export default ItemListContainer