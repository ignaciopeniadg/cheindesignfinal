import React from 'react'
import './header.css'
import CTA from './CTA'
import Foto from '../../assets/img/foto-chein.png'
import HeaderSocials from './HeaderSocials'
import Logo from '../../assets/img/navbar-logo.png'

const Header = () => {
    return (
        <header id='home'>
            <div className="container header__container">
                <div className='logo__container'>
                    <img src={Logo} alt='logo'/>
                </div>
                <h5>¡Hola! Mi nombre es</h5>
                <h1>Ignacio Peña</h1>
                <h5>Diseñador</h5>
                <CTA />
                <div className='foto'>
                    <img src={Foto} alt='foto'/>
                </div>
            </div>

        </header>
    )
}

export default Header