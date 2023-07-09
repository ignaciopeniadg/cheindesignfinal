import React, { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom';

const categorias =
    [
        { id: 1, name: "Identidad Corporativa" },
        { id: 2, name: "Merch" },
        { id: 3, name: "Pack" },
        { id: 4, name: "Editorial" },
        { id: 5, name: "Ilustración" },
        { id: 6, name: "Redes" },
        { id: 7, name: "Web" },
    ];

const servicios =
    [
        {
            id: "a1",
            nombre: "Diseño de Logotipo",
            categoriaId: 1,
            descripcion: "Logotipo/Isotipo, Aplicaciones básicas y guía de uso. Comprende 3 etapas: 3 opciones de diseño en base a brief desarrollado por cliente, 2 etapas de corrección, (se refiere a etapas globales, se pueden corregir más de un detalle en cada etapa) y por último Desarrollo de manual de marca.",
            precio: 200
        },
        {
            id: "a2",
            nombre: "Rediseño de una identidad",
            categoriaId: 1,
            descripcion: "Logotipo/Isotipo, Aplicaciones básicas y guía de uso. Comprende 3 etapas: 3 opciones de diseño en base a brief desarrollado por cliente, 2 etapas de corrección, (se refiere a etapas globales, se pueden corregir más de un detalle en cada etapa) y por último Desarrollo de manual de marca.",
            precio: 200
        },
        {
            id: "a3",
            nombre: "Digitalización de marca",
            categoriaId: 1,
            descripcion: "En el caso de contar con una marca previamente diseñada por otro profesional y no contar con su versión en algún programa de vector, se digitalizará en Illustrator para tener un archivo vectorizado del mismo.",
            precio: 30
        },
        {
            id: "b1",
            nombre: "Calcos",
            categoriaId: 2,
            descripcion: "Diseño MockUp de Calcos circulares con elementos gráficos visuales de la marca. Se entrega archivo jpg del MockUp y Psd o Ai con Vectores y referencia de medidas para su impresión",
            precio: 30
        },
        {
            id: "b2",
            nombre: "Remera",
            categoriaId: 2,
            descripcion: "Diseño MockUp de Remera con elementos gráficos visuales de la marca. Se entrega archivo jpg del MockUp y Psd o Ai con Vectores y referencia de medidas para su impresión",
            precio: 30
        },
        {
            id: "b3",
            nombre: "Hoodie",
            categoriaId: 2,
            descripcion: "Diseño MockUp de Hoodie con elementos gráficos visuales de la marca. Se entrega archivo jpg del MockUp y Psd o Ai con Vectores y referencia de medidas para su impresión",
            precio: 30
        },
        {
            id: "b4",
            nombre: "Gorra",
            categoriaId: 2,
            precio: 30
        },
        {
            id: "b5",
            nombre: "Bolsa",
            categoriaId: 2,
            precio: 20
        },
        {
            id: "b6",
            nombre: "Botella",
            categoriaId: 2,
            descripcion: "Etiqueta y contraetiqueta",
            precio: 20
        },
        {
            id: "c1",
            nombre: "Envase",
            categoriaId: 3,
            descripcion: "Etiqueta aplicada, envoltura simple, impresión sobre envase, etc.",
            precio: 100
        },
        {
            id: "c21",
            nombre: "Caja",
            categoriaId: 3,
            descripcion: "Desarrollo morfológico de estuche troquelado.",
            precio: 150
        },
        {
            id: "c3",
            nombre: "Etiqueta",
            categoriaId: 3,
            precio: 100
        },
        {
            id: "d1",
            nombre: "Portada CD",
            categoriaId: 4,
            precio: 40
        },
        {
            id: "d2",
            nombre: "Tapa de Libro o Revista",
            categoriaId: 4,
            precio: 40
        },
        {
            id: "d3",
            nombre: "Menú de Restaurante o Bar",
            categoriaId: 4,
            precio: 100
        },
        {
            id: "e1",
            nombre: "Diseño de Avatar para RRSS",
            categoriaId: 5,
            precio: 50
        },
        {
            id: "e2",
            nombre: "Ilustración Vectorial",
            categoriaId: 5,
            precio: 100
        },
        {
            id: "f1",
            nombre: "Posteo o Historia Estática",
            categoriaId: 6,
            Descripción: "Diseño de posteo o historia estática para redes sociales.",
            precio: 25
        },
        {
            id: "f2",
            nombre: "Posteo o Historia Animada",
            categoriaId: 6,
            Descripción: "Diseño de posteo o historia animada para redes sociales. Animación básica de hasta 15 segundos",
            precio: 40
        },
        {
            id: "f3",
            nombre: "Plantilla Feed o Historia",
            categoriaId: 6,
            descripcion: "Diseño de plantilla en continuación de línea gráfica con manual de marca de 3 piezas",
            precio: 40
        },
        {
            id: "f4",
            nombre: "Plantilla Feed",
            categoriaId: 6,
            descripcion: "Diseño de plantilla en continuación de línea gráfica con manual de marca de 6 piezas",
            precio: 60
        },
        {
            id: "f5",
            nombre: "Plantilla Feed",
            categoriaId: 6,
            descripcion: "Diseño de plantilla en continuación de línea gráfica con manual de marca de 9 piezas",
            precio: 90
        },
        {
            id: "g1",
            nombre: "Maquetación Landing",
            descripcion: "Maquetación de landing responsivo/adaptativo de hasta 5 secciones en html, css y JavaScript",
            categoriaId: 7,
            precio: 100
        },
        {
            id: "g2",
            nombre: "Maquetación de Sitio",
            descripcion: "Maquetación de sitio responsivo/adaptativo de hasta 5 secciones separadas html, css y JavaScript",
            categoriaId: 7,
            precio: 200
        },
        {
            id: "g3",
            nombre: "Diseño MockUp de Landing",
            descripcion: "Diseño de landing responsivo/adaptativo de hasta 5 secciones en Photoshop con MockUp Visual.",
            categoriaId: 7,
            precio: 50
        },
        {
            id: "g4",
            nombre: "Diseño MockUp de Sitio",
            descripcion: "Diseño de sitio responsivo/adaptativo de hasta 5 secciones en Photoshop con MockUp Visual.",
            categoriaId: 7,
            precio: 100
        },
    ];

export const ItemDetailContainer = () => {

    const [data, setData] = useState ({});
    const { detalleId } = useParams();

    useEffect(() => {
        const getData = new Promise((resolve) => {
            setTimeout(() => {
                resolve(servicios)
            }, 3000)
        });
        getData.then(res => setData(res.find(servicios => servicios.id === detalleId)));
    }, [])

    return (
        <div>
            <ItemDetail data={data} />
        </div>
    )
}

export default ItemDetailContainer