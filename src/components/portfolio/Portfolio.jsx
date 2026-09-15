import React from 'react'
import './portfolio.css'
import Surelock from '../../assets/surelock-site.png'
import Vintage from '../../assets/vintagecuts-site.png'
import Build from "../../assets/Build-Routine.png"
import Details from "../../assets/Exercise-Details.png"
import Manage from "../../assets/Manage-Routine.png"
import Expense from '../../assets/expense-tracker.png'
import Starwars from "../../assets/Starwars-port.png"

const Portfolio = () => {
  return (
    <section id="portfolio">

      <h2>Projects</h2>
      <section>
        <div className="container portfolio__featured">
          <div className="portfolio__featured-gallery">
            <img
              src={Build}
              alt="LiftLab build routine screen"
              className="portfolio__featured-main"
            />

            <div className="portfolio__featured-secondary">
              <img
                src={Details}
                alt="LiftLab exercise details screen"
              />

              <img
                src={Manage}
                alt="LiftLab manage routines screen"
              />
            </div>
          </div>

          <div className="portfolio__featured-content">
            <span className="portfolio__featured-label">
              Featured Project
            </span>

            <h3>LiftLab</h3>

            <h4 className="portfolio__featured-subtitle">
              Full-Stack Fitness Application
            </h4>

            <p className="portfolio__featured-description">
              Beginner-focused fitness application for discovering exercises, building routines, and managing workouts. Built with React, Node.js, Express, and MongoDB, featuring external exercise API integration, persistent routine storage, and a custom REST API.
            </p>

            <div className="portfolio__featured-tech">
              <span>React</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>MongoDB</span>
              <span>Mongoose</span>
              <span>REST API</span>
            </div>

            <div className="portfolio__featured-cta">
              <a
                href="https://github.com/Danieljamespm/LiftLab"
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <span className="btn btn-primary portfolio__development-btn">
                In Development
              </span>
            </div>
          </div>
        </div>
      </section>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Expense} alt="Expense Tracker App" />
          </div>
          <h3>Expense Tracker App</h3>
          <h5 className='text-light'>React, Tailwind, MongoDB, Axios, Authorization, Recharts, Hot-Toast</h5>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/Danieljamespm/ExpenseTracker" className='btn' target='_blank'>Github</a>
            <a href="https://xpenz-tracker.netlify.app" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Starwars} alt="Movie-Search" />
          </div>
          <h3>Movie Searcher <br></br> Web App</h3>
          <h5 className='text-light'>React, JavaScript, OMDb API, CSS </h5>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/Danieljamespm/react-movie-search" className='btn' target='_blank'>Github</a>
            <a href="https://imdb-movie-searcher.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>

        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Surelock} alt="Surelock Homes Website" />
          </div>
          <h3>SureLock Homes Multi-Page Website</h3>
          <h5 className='text-light'>HTML, CSS, JS</h5>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/Danieljamespm/surelockhomes" className='btn' target='_blank'>Github</a>
            <a href="https://surelockhomeslocksmith.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Vintage} alt="Vintage Cuts Barber Shop Website" />
          </div>
          <h3>Vintage Cuts Barber Shop One-Page Site</h3>
          <h5 className='text-light'>React and Tailwind</h5>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/Danieljamespm/barber-shop-react" className='btn' target='_blank'>Github</a>
            <a href="https://vintagecuts.netlify.app" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio