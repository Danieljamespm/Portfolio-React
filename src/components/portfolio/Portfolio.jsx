import React from 'react'
import './portfolio.css'
import Surelock from '../../assets/surelock-site.png'
import Vintage from '../../assets/vintagecuts-site.png'
import Todo from '../../assets/Todo-app.png'
import Expense from '../../assets/expense-tracker.png'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Expense} alt="Expense Tracker App" />
          </div>
          <h3>Expense Tracker App</h3>
          <h5 className='text-light'>React, Tailwind, MongoDB, Axios, Authorization, Recharts, Hot-Toast</h5>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/Danieljamespm/ExpenseTracker" className='btn' target='_blank'>Github</a>
            <a href="https://expensetracker-mtu9.onrender.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
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
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Todo} alt="Simple To-do App" />
          </div>
          <h3>Simple To-Do <br></br> Web App</h3>
          <h5 className='text-light'>React, Express.js, MongoDB</h5>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/Danieljamespm/Todo-Manager" className='btn' target='_blank'>Github</a>
            <a href="https://todo-manager-04oj.onrender.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
          
        </article>
      </div>
    </section>
  )
}

export default Portfolio