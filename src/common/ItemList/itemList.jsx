

const ItemList = ({ stockDeServicios }) => {

    return (
        stockDeServicios.map((stockDeServicios) => (
            <div className='card__servicio' key={stockDeServicios.nombre}>
                <h2 className='card__servicio-nombre'>{stockDeServicios.nombre}</h2>
                <p className='card__servicio-descripcion'>{stockDeServicios.descripcion}</p>
                <h4 className='card__servicio-descripcion'>{stockDeServicios.precio} USD</h4>
                <button className='btn' onClick={() => navigate(`/detalle/${stockDeServicios.id}`)} >Ver Detalle</button>
            </div>
    )))

}

export { ItemList }