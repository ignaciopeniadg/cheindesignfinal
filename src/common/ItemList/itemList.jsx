// import { useNavigate } from "react-router-dom"
import { ItemServicio } from "../ItemServicio/ItemServicio";


const ItemList = ({ Servicios }) => {

    return (
        <div>
            {
                Servicios.map((ItemServicio) => (
                    <ItemServicio
                        id={ItemServicio.id}
                        nombre={ItemServicio.nombre}
                        categoria={ItemServicio.categoria}
                        descripcion={ItemServicio.descripcion}
                        precio={ItemServicio.precio}
                        onItemClicked={ItemServicio.onItemClicked}
                        textButton={ItemServicio.textButton}
                    />
                ))
            };
        </div>
    );

};

export { ItemList };

/*                <button className='btn' onClick={() => navigate(`/detalle/${stockDeServicios.id}`)} >Ver Detalle</button> */