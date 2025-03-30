import React, { useRef } from 'react'
import './contact.css'
import { MdEmail } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs"
import emailjs from '@emailjs/browser'


const Contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_u3ubpxi', 'template_bh7neeg', form.current, {
          publicKey: 'KyL6tdjs7rfzMYV8G',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            alert('Message Sent!');
            form.current.reset()
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  
    return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>mettlerwebdev@gmail.com</h5>
            <a href="mailto:mettlerwebdev@gmail.com" target='_blank'>Send me an email</a>
          </article>
          <article className="contact__option">
            <FaFacebookMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Mettler Software Development</h5>
            <a href="https://www.facebook.com/mettlerwebdev/" target='_blank'>Send me a message</a>
          </article>
          <article className="contact__option">
            <BsLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Danny Mettler</h5>
            <a href="https://www.linkedin.com/in/danny-mettler/" target='_blank'>Send me a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact