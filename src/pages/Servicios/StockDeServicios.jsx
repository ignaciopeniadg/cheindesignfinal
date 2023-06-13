
/*Imports Identidad Corporativa "A"*/
import FotoMarca1 from '../../assets/img/catalogo-servicios/diseñod-de-logotipo.jpg'
import FotoMarca2 from '../../assets/img/catalogo-servicios/digitalizacion-de-la-marca.png'

/*Imports Merch "B"*/
import FotoCalcos from '../../assets/img/catalogo-servicios/Calcos.png'
import FotoRemera from '../../assets/img/catalogo-servicios/Remera.png'
import FotoHoodie from '../../assets/img/catalogo-servicios/Hoddie.png'
import FotoGorra from '../../assets/img/catalogo-servicios/Gorra.png'


/*Imports Pack "C"*/
import FotoPack from '../../assets/img/catalogo-servicios/pack.png'
import FotoEtiqueta from '../../assets/img/catalogo-servicios/Etiqueta.png'

/*Imports Editorial "D"*/
import FotoPortadaCD from '../../assets/img/catalogo-servicios/portada-cd.png'
import FotoTapaLibro from '../../assets/img/catalogo-servicios/tapa-libro.png'
/*Imports Ilustración "E"*/
/*Imports Redes Sociales "F"*/
/*Imports Web "G"*/
/*Imports Foto en Blanco para Assets sin definir*/
import Blanco from '../../assets/img/catalogo-servicios/blanco.png'



const StockDeServicios =

            [
                {
                    id:"a1",
                    nombre:"Diseño de Logotipo",
                    categoria:"Identidad Corporativa",
                    descripcion:"Logotipo/Isotipo, Aplicaciones básicas y guía de uso. Comprende 3 etapas: 3 opciones de diseño en base a brief desarrollado por cliente, 2 etapas de corrección, (se refiere a etapas globales, se pueden corregir más de un detalle en cada etapa) y por último Desarrollo de manual de marca.",
                    precio:"200",
                    image:{FotoMarca1},
                },
                {
                    id:"a2",
                    nombre:"Rediseño de una identidad",
                    categoria:"Identidad Corporativa",
                    descripcion:"Logotipo/Isotipo, Aplicaciones básicas y guía de uso. Comprende 3 etapas: 3 opciones de diseño en base a brief desarrollado por cliente, 2 etapas de corrección, (se refiere a etapas globales, se pueden corregir más de un detalle en cada etapa) y por último Desarrollo de manual de marca.",
                    precio:"200",
                    image:{FotoMarca1},
                },
                {
                    id:"a3",
                    nombre:"Digitalización de marca",
                    categoria:"Identidad Corporativa",
                    descripcion:"En el caso de contar con una marca previamente diseñada por otro profesional y no contar con su versión en algún programa de vector, se digitalizará en Illustrator para tener un archivo vectorizado del mismo.",
                    precio:"30",
                    image:{FotoMarca2},
                },
                {
                    id:"b1",
                    nombre:"Calcos",
                    categoria:"Merch",
                    descripcion:"Diseño MockUp de Calcos circulares con elementos gráficos visuales de la marca. Se entrega archivo jpg del MockUp y Psd o Ai con Vectores y referencia de medidas para su impresión",
                    precio:"30",
                    image:{FotoCalcos}
                },
                {
                    id:"b2",
                    nombre:"Remera",
                    categoria:"Merch",
                    descripcion:"Diseño MockUp de Remera con elementos gráficos visuales de la marca. Se entrega archivo jpg del MockUp y Psd o Ai con Vectores y referencia de medidas para su impresión",
                    precio:"30",
                    image:{FotoRemera},
                },
                {
                    id:"b3",
                    nombre:"Hoodie",
                    categoria:"Merch",
                    descripcion:"Diseño MockUp de Hoodie con elementos gráficos visuales de la marca. Se entrega archivo jpg del MockUp y Psd o Ai con Vectores y referencia de medidas para su impresión",
                    precio:"30",
                    image:{FotoHoodie}
                },
                {
                    id:"b4",
                    nombre:"Gorra",
                    categoria:"Merch",
                    precio:"30",
                    image:{FotoGorra}
                },
                {
                    id:"b5",
                    nombre:"Bolsa",
                    categoria:"Merch",
                    precio:"20",
                    image:{Blanco},
                },
                {
                    id:"b6",
                    nombre:"Botella",
                    categoria:"Merch",
                    descripcion:"Etiqueta y contraetiqueta",
                    precio:"20",
                    image:{Blanco},
                },
                {
                    id:"c1",
                    nombre:"Envase",
                    categoria:"Pack",
                    descripcion:"Etiqueta aplicada, envoltura simple, impresión sobre envase, etc.",
                    precio:"100",
                    image:{FotoPack},
                },
                {
                    id:"c21",
                    nombre:"Caja",
                    categoria:"Pack",
                    descripcion:"Desarrollo morfológico de estuche troquelado.",
                    precio:"150",
                    image:{Blanco},
                },
                {
                    id:"c3",
                    nombre:"Etiqueta",
                    categoria:"Pack",
                    precio:"100",
                    image:{FotoEtiqueta},
                },
                {
                    id:"d1",
                    nombre:"Portada CD",
                    categoria:"Editorial",
                    precio:"40",
                    image:{FotoPortadaCD},
                },
                {
                    id:"d2",
                    nombre:"Tapa de Libro o Revista",
                    categoria:"Editorial",
                    precio:"40",
                    image:{FotoTapaLibro},
                },
                {
                    id:"d3",
                    nombre:"Menú de Restaurante o Bar",
                    categoria:"Editorial",
                    precio:"100",
                    image:{Blanco},
                },
                {
                    id:"e1",
                    nombre:"Diseño de Avatar para RRSS",
                    categoria:"Ilustración",
                    precio:"50",
                    image:{Blanco},
                },
                {
                    id:"e2",
                    nombre:"Ilustración Vectorial",
                    categoria:"Ilustración",
                    precio:"100",
                    image:{Blanco},
                },
                {
                    id:"f1",
                    nombre:"Posteo o Historia Estática",
                    categoria:"Redes",
                    Descripción:"Diseño de posteo o historia estática para redes sociales.",
                    precio:"25",
                    image:{Blanco},
                },
                {
                    id:"f2",
                    nombre:"Posteo o Historia Animada",
                    categoria:"Redes",
                    Descripción:"Diseño de posteo o historia animada para redes sociales. Animación básica de hasta 15 segundos",
                    precio:"40",
                    image:{Blanco},
                },
                {
                    id:"f3",
                    nombre:"Plantilla Feed o Historia",
                    categoria:"Redes",
                    descripcion:"Diseño de plantilla en continuación de línea gráfica con manual de marca de 3 piezas",
                    precio:"40",
                    image:{Blanco},
                },
                {
                    id:"f4",
                    nombre:"Plantilla Feed",
                    categoria:"Redes",
                    descripcion:"Diseño de plantilla en continuación de línea gráfica con manual de marca de 6 piezas",
                    precio:"60",
                    image:{Blanco},
                },
                {
                    id:"f5",
                    nombre:"Plantilla Feed",
                    categoria:"Redes",
                    descripcion:"Diseño de plantilla en continuación de línea gráfica con manual de marca de 9 piezas",
                    precio:"90",
                    image:{Blanco},
                },
                {
                    id:"g1",
                    nombre:"Maquetación Landing",
                    descripcion:"Maquetación de landing responsivo/adaptativo de hasta 5 secciones en html, css y JavaScript",
                    categoria:"Web",
                    precio:"100",
                    image:{Blanco},
                },
                {
                    id:"g2",
                    nombre:"Maquetación de Sitio",
                    descripcion:"Maquetación de sitio responsivo/adaptativo de hasta 5 secciones separadas html, css y JavaScript",
                    categoria:"Web",
                    precio:"200",
                    image:{Blanco},
                },
                {
                    id:"g3",
                    nombre:"Diseño MockUp de Landing",
                    descripcion:"Diseño de landing responsivo/adaptativo de hasta 5 secciones en Photoshop con MockUp Visual.",
                    categoria:"Web",
                    precio:"50",
                    image:{Blanco},
                },
                {
                    id:"g4",
                    nombre:"Diseño MockUp de Sitio",
                    descripcion:"Diseño de sitio responsivo/adaptativo de hasta 5 secciones en Photoshop con MockUp Visual.",
                    categoria:"Web",
                    precio:"100",
                    image:{Blanco},
                },
            ]