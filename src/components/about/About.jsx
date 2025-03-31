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
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className='about__me-image'>
          <img src={ME} alt="picture of Danny Mettler" />
          </div>
        </div>


        <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaBrain className='about__icon' />
                <h5>Experience</h5>
                <small>2+ Years</small>
              </article>
              <article className="about__card">
                <GrGroup className='about__icon' />
                <h5>Clients</h5>
                <small>10+ Clients</small>
              </article>
              <article className="about__card">
                <FaFolder className='about__icon' />
                <h5>Projects</h5>
                <small>20+ Completed</small>
              </article>
            </div>
            <p>I'm a self-taught web developer with a passion for building responsive, user-friendly websites. With a background in retail, hospitality, and running my own locksmith business, I bring problem-solving skills and adaptability to tech. I specialize in frontend and full-stack development, always eager to learn and grow. 
            </p>

            <a href="#contact" className='btn btn-primary'>Let's Connect</a>
        </div>
      </div>



    </section>
  )
}

export default About