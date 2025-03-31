import React from 'react'
import './footer.css'
import { BsLinkedin } from "react-icons/bs"
import { BsGithub } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <a href="#"></a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/mettlerwebdev/"><FaFacebookSquare /></a>
        <a href="https://x.com/DanieljamesPM"><BsTwitterX /></a>
        <a href="https://www.linkedin.com/in/danny-mettler/"><BsLinkedin /></a>
        <a href="https://github.com/Danieljamespm"><BsGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Danny Mettler Software Engineer. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer