import { categorias } from '../../tmp/data'


const getCategorias = async () => {

    return new Promise ((resolve, reject) => {
        resolve(categorias);
    });
};

const getCategoria = async (id) => {
    return new Promise ((resolve, reject) => {
        resolve(categorias.find((categorias) => categorias.id == id));
    });
}


/* const updateItem = async () => {}

const deleteItem = async () => {}

const createItem = async () => {} */

export { getCategorias, getCategoria };