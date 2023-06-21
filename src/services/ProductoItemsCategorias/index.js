import { categorias } from '../../tmp/StockDeServicios'


const getCategories = async () => {

    return new Promise ((resolve, reject) => {
        resolve(categorias);
    });
};

const getCategory = async (id) => {
    return new Promise ((resolve, reject) => {
        resolve(categorias.find((categorias) => categorias.id == id));
    });
}


/* const updateItem = async () => {}

const deleteItem = async () => {}

const createItem = async () => {} */

export { getCategories, getCategory };