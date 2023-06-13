import React from 'react'
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
    <nav>
      <a><BiMenu /></a>
      <a href='#home'><img src={Logo} alt='logo'/></a>
      <a href='#sobremi'><MdOutlinePersonOutline /></a>
      <a href='#experiencia'><MdOutlineWorkHistory /></a>
      <a href='#estudios'><MdOutlineAssuredWorkload /></a>
      <a href='#skills'><AiOutlineStar/></a>
      <a href='#portfolio'><GoBook /></a>
      <a href='#servicios'><AiOutlineShoppingCart /></a>
      <a href='#contacto'><AiOutlineMail /></a>
    </nav>
  )
}

export default Navbar