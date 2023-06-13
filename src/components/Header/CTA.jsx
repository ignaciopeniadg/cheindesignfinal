import React from 'react'
import CV from '../../assets/pdf/CV-Esp.pdf'

const CTA = () => {
    return (
        <div className='cta'>
            <a href={CV} download className='btn'>Descargar CV</a>
            <a href="#contacto" className='btn'>Contacto</a>
        </div>
    )
}

export default CTA