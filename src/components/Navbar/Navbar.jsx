import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'
import Logo from '../../assets/img/navbar-logo.png'
import {BiMenu} from 'react-icons/bi'
import {MdOutlinePersonOutline} from 'react-icons/md'
import {MdOutlineWorkHistory} from 'react-icons/md'
import {MdOutlineAssuredWorkload} from 'react-icons/md'
import {GoBook} from 'react-icons/go'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {AiOutlineStar} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'


const Navbar = () => {
  return (
    <nav className='nav__principal'>
      <ul>
        <li><button><BiMenu className='boton-menu' /></button></li>
        <li><NavLink to='/'><img className='logo' src={Logo} alt='logo'/></NavLink></li>
        <li><NavLink to='/sobremi'><MdOutlinePersonOutline /></NavLink></li>
        <li><NavLink to='/experiencia'><MdOutlineWorkHistory /></NavLink></li>
        <li><NavLink to='/estudios'><MdOutlineAssuredWorkload /></NavLink></li>
        <li><NavLink to='/skills'><AiOutlineStar/></NavLink></li>
        <li><NavLink to='/portfolio'><GoBook /></NavLink></li>
        <li><NavLink to='/servicios'><AiOutlineShoppingCart /></NavLink></li>
        <li><NavLink to='/contacto'><AiOutlineMail /></NavLink></li>
      </ul>
    </nav>
  )
}

export default Navbar