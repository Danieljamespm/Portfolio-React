import React from 'react'
import { BsLinkedin } from "react-icons/bs"
import { BsGithub } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/danny-mettler/" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com/Danieljamespm" target='_blank'><BsGithub /></a>
        <a href="https://www.facebook.com/mettlerwebdev/" target='_blank'><FaFacebookSquare /></a>
    </div>
  )
}

export default HeaderSocials