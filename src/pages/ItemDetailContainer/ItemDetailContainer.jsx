import { useParams } from "react-router-dom"
import { itemDetail } from "../../common/ItemDetail/ItemDetail"

const ItemDetailContainer = () => {

    const { } = useParams

    return (
        <div>
            ItemListContainer{id}
        </div>
    )
}

export { ItemDetailContainer }