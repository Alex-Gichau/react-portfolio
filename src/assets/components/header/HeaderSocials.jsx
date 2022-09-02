import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {ImBehance2} from 'react-icons/im'
import {ImTwitter} from 'react-iconsim'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="_blank">FaLinkedin</a>
        <a href="https://github.com" target="_blank">FaGithub</a>
        <a href="https://behance.com" target="_blank">ImBehance2</a>
        <a href="https://twitter.com" target="_blank">ImTwitter</a>
        </div>
  )
}

export default HeaderSocials