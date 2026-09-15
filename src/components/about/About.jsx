import React from 'react'
import './about.css'
// import ME from '../../assets/portfolio-shot.png'
import ME from '../../assets/portfoli-shot.jpg'
import { FaBrain } from "react-icons/fa";
import { GrGroup } from "react-icons/gr";
import { FaFolder } from "react-icons/fa";

const About = () => {
  return (
    <section id='about'>

      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className='about__me-image'>
            <img src={ME} alt="picture of Danny Mettler" />
          </div>
        </div>


        <div className="about__content">

          <p>I'm a full-stack developer focused on building practical, user-friendly applications from frontend to backend. I work primarily with React, JavaScript, Node.js, Express, and MongoDB, and enjoy understanding how every piece of an application connects—from the interface a user interacts with to the API and database behind it.</p>

          <p>I'm currently developing LiftLab, a full-stack fitness application designed to help beginners discover exercises, build routines, and track their training. My background running my own business taught me how to solve real problems, work independently, and adapt quickly—skills I now bring to software development.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Connect</a>
        </div>
      </div>



    </section>
  )
}

export default About