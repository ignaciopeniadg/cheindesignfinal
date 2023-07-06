import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import { Home } from './pages/Home/Home'
import { Navbar } from './components/Navbar/Navbar'
import { SobreMi } from './pages/Sobremi/SobreMi'
import { Experiencia } from './pages/Experiencia/Experiencia'
import { Estudios } from './pages/Estudios/Estudios'
import { Skills } from './pages/Skills/Skills'
import { Portfolio } from './pages/Portfolio/Portfolio'
import { Servicios } from './pages/Servicios/Servicios'
import { Contacto } from './pages/Contacto/Contacto'
import { HeaderSocials } from './components/HeaderSocials/HeaderSocials'
import { Form } from 'react-router-dom'
import { ItemListContainer } from './common/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './pages'
import WOW from 'wowjs';


class App extends React.Component {
    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();
    }
    render() {
        return (
            <>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/sobremi' element={<SobreMi />} />
                        <Route path='/experiencia' element={<Experiencia />} />
                        <Route path='/estudios' element={<Estudios />} />
                        <Route path='/skills' element={<Skills />} />
                        <Route path='/portfolio' element={<Portfolio />} />
                        <Route path='/servicios' element={<Servicios />} />
                        <Route path='/itemlistcontainer' element={<ItemListContainer />} />
                        <Route path='/categoria/:id' element={<ItemListContainer />} />
                        <Route path='/detalle/:id' element={<ItemDetailContainer />} />
                        <Route path='/contacto' element={<Contacto />} />
                    </Routes>
                </BrowserRouter>
                <HeaderSocials />
            </>

        )
    }
}


export default App