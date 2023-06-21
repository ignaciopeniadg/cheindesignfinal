import "./itemServicio.css"

const ItemServicio = ({ id, nombre, categoria, descripcion, precio }) => {
    return (
        <div className='card__servicio' key={nombre}>
            <h2 className='card__servicio-nombre'>{nombre}</h2>
            <h3 className= 'card__servicio-categoria'>{categoria}</h3>
            <p className='card__servicio-descripcion'>{descripcion}</p>
            <h4 className='card__servicio-descripcion'>{precio} USD</h4>
        </div>
    )
}

export { ItemServicio };