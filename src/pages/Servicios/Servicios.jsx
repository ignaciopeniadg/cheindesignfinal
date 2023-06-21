import React from 'react'
import './servicios.css'

import Carrito from './Carrito/Carrito'
import { ItemListContainer } from '../../common/ItemListContainer/ItemListContainer'

const Servicios = () => {
  return (
    <section id='servicios'>
      <Carrito />
      <div>
        <ItemListContainer />
      </div>
      
    </section>

  )
}

export { Servicios }