import { Servicios } from '../../tmp/data'


const getItems = async (catId) => {

    return new Promise ((resolve, reject) => {
        resolve(Servicios.filter((Servicio) => Servicio.categoriaId === catId));
    });
};

const getItem = async (id) => {
    return new Promise ((resolve, reject) => {
        resolve(Servicios.find((Servicio) => Servicio.id == id));
    });
}


/* const updateItem = async () => {}

const deleteItem = async () => {}

const createItem = async () => {} */

export { getItem, getItems };

