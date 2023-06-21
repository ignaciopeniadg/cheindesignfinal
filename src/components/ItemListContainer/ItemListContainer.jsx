import './itemListContainer.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getItems } from "../../services/ProductosItems"
import { ItemList } from '../../common/ItemList/itemList'
/* import { getCategory, getCategories } from "./ProductoItemsCategorias" */

const ItemListContainer = () => {
    const { id } = useParams();

    const [stockDeServicios, setItems] = useState ([]);

    useEffect (() => {
        getItems().then((data) => {
            setItems(data);
        });

    }, [])

    return (
        <>
            <container>
                <ItemList stockDeServicios={stockDeServicios} />
            </container>

        </>
    )
}

export default ItemListContainer