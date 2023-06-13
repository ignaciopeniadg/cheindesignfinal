import React from 'react'
import './servicios.css'
import ServiciosCategorias from './ServiciosCategorias/ServiciosCategorias'
import ServiciosTemplate from './ServiciosTemplate/ServiciosTemplate'
import Carrito from './Carrito/Carrito'

const Servicios = () => {
  return (
    <section id='servicios'>
      <Carrito />
      <div className='container servicios__divicion'>
        <ServiciosCategorias />
        <ServiciosTemplate />
      </div>
      
    </section>

  )
}

export default Servicios