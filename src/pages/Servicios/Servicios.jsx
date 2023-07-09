import React from 'react'
import './servicios.css'
import ItemListContainer from '../../common/ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../../common/ItemDetailContainer/ItemDetailContainer'

const Servicios = () => {
  return (
    <section id='servicios'>
      <ItemListContainer/>
      <ItemDetailContainer/>
    </section>

  )
}

export { Servicios }