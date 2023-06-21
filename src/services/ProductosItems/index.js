import { stockDeServicios } from '../../tmp/StockDeServicios'


const getItems = async () => {

    return new Promise ((resolve, reject) => {
        resolve(stockDeServicios);
    });
};

const getItem = async (id) => {
    return new Promise ((resolve, reject) => {
        resolve(stockDeServicios.find((stockDeServicios) => stockDeServicios.id == id));
    });
}


/* const updateItem = async () => {}

const deleteItem = async () => {}

const createItem = async () => {} */

export { getItem, getItems };

