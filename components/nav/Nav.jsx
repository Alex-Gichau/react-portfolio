import React from 'react'
import './nav.css'
import {RiHome6Line} from 'react-icons/ri'
import {FaRegUserCircle} from 'react-icons/fa'
import {FaLaptopCode} from 'react-icons/fa'
import {SiAdobephotoshop} from 'react-icons/si'
import {HiChatBubbleLeftRight} from 'react-icons/hi'
import {IoLogoGameControllerB} from 'react-icons/io'


const Nav = () => {
  return (
    <nav>
      <a href="#" className='active'>RiHome6Line</a>
      <a href="#about">FaRegUserCircle</a>
      <a href="#experience">FaLaptopCode</a>
      <a href="#services">SiAdobephotoshop</a>
      <a href="#contact">HiChatBubbleLeftRight</a>
      <a href="#interests">IoLogoGameControllerB</a>
    </nav>
  )
}

export default Nav