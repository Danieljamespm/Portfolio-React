import React from 'react'
import './experience.css'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa6";
import { BiLogoMongodb } from "react-icons/bi";
import { SiMongoosedotws } from "react-icons/si";
import { FaGithub } from 'react-icons/fa';
import { TbApi } from 'react-icons/tb';
import { MdDevices } from "react-icons/md"
const Experience = () => {
  return (
    <section id="experience">

      <h2>Technical Skills</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaHtml5 className='experience__details-icon' />
              <div>
                <h4>HTML</h4>

              </div>
            </article>
            <article className="experience__details">
              <FaCss3 className='experience__details-icon' />
              <div>
                <h4>CSS</h4>

              </div>
            </article>
            <article className="experience__details">
              <SiJavascript className='experience__details-icon' />
              <div>
                <h4>Javascript</h4>

              </div>
            </article>
            <article className="experience__details">
              <FaReact className='experience__details-icon' />
              <div>
                <h4>React</h4>

              </div>
            </article>
            <article className="experience__details">
              <RiTailwindCssFill className='experience__details-icon' />
              <div>
                <h4>Tailwind CSS</h4>

              </div>
            </article>
            <article className="experience__details">
              <MdDevices className='experience__details-icon' />
              <div>
                <h4>Responsive Design</h4>

              </div>
            </article>

          </div>
        </div>


        <div className="experience__backend">
          <h3>Backend & Tools</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaNode className='experience__details-icon' />
              <div>
                <h4>Node.js</h4>

              </div>
            </article>
            <article className="experience__details">
              <BiLogoMongodb className='experience__details-icon' />
              <div>
                <h4>MongoDB</h4>

              </div>
            </article>
            <article className="experience__details">
              <SiJavascript className='experience__details-icon' />
              <div>
                <h4>Express.js</h4>

              </div>
            </article>
            <article className="experience__details">
              <SiMongoosedotws className='experience__details-icon' />
              <div>
                <h4>Mongoose</h4>

              </div>
            </article>
            <article className="experience__details">
              <TbApi className='experience__details-icon' />
              <div>
                <h4>REST APIS</h4>

              </div>
            </article>
            <article className="experience__details">
              <FaGithub className='experience__details-icon' />
              <div>
                <h4>GitHub</h4>

              </div>
            </article>
          </div>
        </div>
      </div>


    </section>
  )
}

export default Experience