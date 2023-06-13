import React from 'react'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import SobreMi from './pages/Sobremi/SobreMi'
import Experiencia from './pages/Experiencia/Experiencia'
import Estudios from './pages/Estudios/Estudios'
import Skills from './pages/Skills/Skills'
import Portfolio from './pages/Portfolio/Portfolio'
import Servicios from './pages/Servicios/Servicios'
import Contacto from './pages/Contacto/Contacto'
import Footer from './components/Footer/Footer'
import HeaderSocials from './components/Header/HeaderSocials'


const App = () => {
    return (
        <>
            <Navbar/>
            <Header/>
            <SobreMi/>
            <Experiencia/>
            <Estudios/>
            <Skills/>
            <Portfolio/>
            <Servicios/>
            <Contacto/>
            <HeaderSocials />
            <Footer/>
        </>
    )
}

export default App