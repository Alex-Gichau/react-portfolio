import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {SiGithub} from 'react-icons/si'
import {AiFillBehanceCircle} from 'react-icons/ai'
import {VscTwitter} from 'react-icons/vsc'
import {AiFillInstagram} from 'react-icons/ai'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/alex-g-b15b14160/" target="_blank" rel="noreferrer"><AiFillLinkedin/></a>
        <a href="https://github.com/Alex-Gichau" target="_blank" rel="noreferrer"><SiGithub/></a>
        <a href="https://behance.net/mburugichau" target="_blank" rel="noreferrer"><AiFillBehanceCircle/></a>
        <a href="https://twitter.com/alexgeeshau" target="_blank" rel="noreferrer"><VscTwitter/></a>
        <a href="https://www.instagram.com/geeshau_art/" target="_blank" rel="noreferrer"><AiFillInstagram/></a>

    </div>
  )
}

export default HeaderSocials