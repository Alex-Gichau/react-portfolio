import React from 'react'
import './nav.css'
import {RiHome6Line} from 'react-icons/ri'
import {FaRegUserCircle} from 'react-icons/fa'
import {FaLaptopCode} from 'react-icons/fa'
import {SiAdobephotoshop} from 'react-icons/si'
import {HiChatBubbleLeftRight} from 'react-icons/hi'
import {IoLogoGameControllerB} from 'react-icons/io'
import {useState} from 'react'


const Nav = () => {
  const [activeNav,setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className = {activeNav === '#' ? 'active' : ''}>RiHome6Line</a>
      <a href="#about" onClick={() => setActiveNav('#about')} className = {activeNav === '#about' ? 'active' : ''} >FaRegUserCircle</a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className = {activeNav === '#experience' ? 'active' : ''} >FaLaptopCode</a>
      <a href="#services" onClick={() => setActiveNav('#services')} className = {activeNav === '#services' ? 'active' : ''} >SiAdobephotoshop</a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className = {activeNav === '#contact' ? 'active' : ''} >HiChatBubbleLeftRight</a>
      <a href="#interests" onClick={() => setActiveNav('#interests')} className = {activeNav === '#interests' ? 'active' : ''} >IoLogoGameControllerB</a>
    </nav>
  )
}

export default Nav