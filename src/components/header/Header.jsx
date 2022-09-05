import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/alex.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1 className='my-name'>Alex Gichau</h1>
        <h4 className='text-light'>Pro Graphics Designer, Animator</h4>
        <CTA/>
        <HeaderSocials/>

        <div className='ME'>
          <img src={ME} alt="me" className='me'/>
        </div>

        <a href="#contact" rel="noreferrer" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header