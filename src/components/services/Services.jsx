import React from 'react'
import './services.css'
import { HiCheckBadge } from "react-icons/hi2";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <div>
            <HiCheckBadge className='service__list-icon' />
            </div>
            <div>
            <p>Website UI design</p>
            <small>Creating visually appealing and functional website layouts.</small>
            </div>
            </li>
            <li>
              <div>
            <HiCheckBadge className='service__list-icon' />
            </div>
            <div>
            <p>Mobile App UI/UX Design</p>
            <small> Designing mobile-friendly user interfaces and experiences.</small>
            </div>
            </li>
            <li>
              <div>
            <HiCheckBadge className='service__list-icon' />
            </div>
            <div>
            <p>Landing Page Design</p>
            <small>Designing high-converting marketing pages with clear CTAs.</small>
            </div>
            </li>
            <li>
              <div>
            <HiCheckBadge className='service__list-icon' />
            </div>
            <div>
            <p>Redesign & UX Audits</p>
            <small>Analyzing and improving the usability of existing websites and apps.</small>
            </div>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
            <div>
            <HiCheckBadge className='service__list-icon' />
            </div>
            <div>
            <p>Custom Website Development</p>
            <small>Building responsive, modern websites from scratch.</small>
            </div>
            </li>
            <li>
              <div>
            <HiCheckBadge className='service__list-icon' />
            </div>
            <div>
            <p>Frontend Development</p>
            <small>Creating interactive and user-friendly interfaces using HTML, CSS, JavaScript, React, or other frameworks.</small>
            </div>
            </li>
            <li>
              <div>
            <HiCheckBadge className='service__list-icon' />
            </div>
            <div>
            <p>Backend Development</p>
            <small>Developing server-side applications with Node.js and Express.js.</small>
            </div>
            </li>
            <li>
              <div>
            <HiCheckBadge className='service__list-icon' />
            </div>
            <div>
            <p>Full-Stack Development</p>
            <small>Combining frontend and backend expertise for complete web solutions.</small>
            </div>
            </li>
            <li>
              <div>
            <HiCheckBadge className='service__list-icon' />
            </div>
            <div>
            <p>Portfolio & Personal Websites</p>
            <small>Designing personal brands and portfolios for individuals.</small>
            </div>
            </li>
            <li>
              <div>
            <HiCheckBadge className='service__list-icon' />
            </div>
            <div>
            <p>Corporate & Business Websites </p>
            <small>Developing professional websites for companies.</small>
            </div>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Technical and Performance</h3>
          </div>

          <ul className="service__list">
            <li>
              <div>
            <HiCheckBadge className='service__list-icon' />
            </div>
            <div>
            <p>Mobile-Responsive Design</p>
            <small>Ensuring websites work seamlessly on all devices.</small>
            </div>
            </li>
            <li>
              <div>
            <HiCheckBadge className='service__list-icon' />
            </div>
            <div>
            <p>Bug Fixes & Troubleshooting</p>
            <small>Debugging and resolving website issues.</small>
            </div>
            </li>
            <li>
              <div>
            <HiCheckBadge className='service__list-icon' />
            </div>
            <div>
            <p>SEO (Search Engine Optimization)</p>
            <small>Optimizing websites for better search engine visibility.</small>
            </div>
            </li>
            <li>
              <div>
            <HiCheckBadge className='service__list-icon' />
            </div>
            <div>
            <p>Web Hosting & Domain Setup</p>
            <small> Assisting with hosting, domain registration, and deployment.</small>
            </div>
            </li>
            <li>
              <div>
            <HiCheckBadge className='service__list-icon' />
            </div>
            <div>
            <p>Competitor Analysis </p>
            <small>Analyzing competitor designs to find opportunities for improvement.</small>
            </div>
            </li>
            
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services