import React, { useState } from 'react'
import './nav.css'
import { ImHome3 } from "react-icons/im";
import { FaUserTie } from "react-icons/fa6";
import { RiComputerLine } from "react-icons/ri";
import { IoIosJournal } from "react-icons/io";
import { TiMessageTyping } from "react-icons/ti";

const Nav = () => {
  const[active, setActive]= useState('#')

  return (
    <nav>
      <a href="#" onClick={() => setActive('#')} className={active === '#' ? 'active' : ''}><ImHome3 /></a>
      <a href="#about" onClick={() => setActive('#about')} className={active === '#about' ? 'active' : ''}><FaUserTie /></a>
      <a href="#experience" onClick={() => setActive('#experience')} className={active === '#experience' ? 'active' : ''}><RiComputerLine /></a>
      <a href="#portfolio" onClick={() => setActive('#portfolio')} className={active === '#portfolio' ? 'active' : ''}><IoIosJournal /></a>
      <a href="#contact" onClick={() => setActive('#contact')} className={active === '#contact' ? 'active' : ''}><TiMessageTyping /></a>
    </nav>
  )
}

export default Nav