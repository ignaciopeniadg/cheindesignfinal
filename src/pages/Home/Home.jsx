import React from 'react'
import './home.css'
import CTA from './CTA'
import Foto from '../../assets/img/foto-chein.png'
import Logo from '../../assets/img/navbar-logo.png'
import WOW from 'wowjs'


class Home extends React.Component {
    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();
    }
    render() {
    return (
        <header id='home'>
            <div className="container header__container">
                <div className='logo__container'>
                    <img classNames="wow bounce" data-wow-duration="2s" src={Logo} alt='logo'/>
                </div>
                <h5>¡Hola! Mi nombre es</h5>
                <h1>Ignacio Peña</h1>
                <h5 className='efecto-escritura'>Diseñador & Desarrollador Front-End</h5>
                <CTA />
                <div className='foto wow bounce' data-wow-duration="2s" >
                    <img src={Foto} alt='foto'/>
                </div>
            </div>

        </header>
    )
}
}

export { Home }