import React from 'react'
import {AiFillLinkedin} from 'react-icons/ai'
import {SiGithub} from 'react-icons/si'
import {AiFillBehanceCircle} from 'react-icons/ai'
import {VscTwitter} from 'react-icons/vsc'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/alex-g-b15b14160/" target="_blank"><AiFillLinkedin/></a>
        <a href="https://github.com/Alex-Gichau" target="_blank"><SiGithub/></a>
        <a href="https://behance.net/mburugichau" target="_blank"><AiFillBehanceCircle/></a>
        <a href="https://twitter.com/alexgeeshau" target="_blank"><VscTwitter/></a>

    </div>
  )
}

export default HeaderSocials