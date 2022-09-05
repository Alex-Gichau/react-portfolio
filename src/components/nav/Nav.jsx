import React from 'react'
import './nav.css'
import {RiHome6Line} from 'react-icons/ri'
import {FaRegUser} from 'react-icons/fa'
import {RiComputerLine} from 'react-icons/ri'
import {MdMiscellaneousServices} from 'react-icons/md'
import {FiPhoneCall} from 'react-icons/fi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
    <a href="#" rel="noreferrer" onClick={() => setActiveNav("#")} className={activeNav === '#' ? 'active' : ''}><RiHome6Line/></a>
    <a href="#about" rel="noreferrer" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaRegUser/></a>
    <a href="#experience" rel="noreferrer" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><RiComputerLine/></a>
    <a href="#service" rel="noreferrer" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdMiscellaneousServices/></a>
    <a href="#contacts" rel="noreferrer" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><FiPhoneCall/></a>
    </nav>    
  )
}

export default Nav