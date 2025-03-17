import React from 'react'
import { FaGithub, FaInstagram } from 'react-icons/fa'
import "./Contact.css"

export default function Contact() {
  return (
    <section className="contact">
      <p className="chat-text">LET'S HAVE A CHAT</p>
      <h1>jcarvalho017@gmail.com</h1>
      <p className="description">
      Reach out with your name and project details — any helpful insights about your goals, technical requirements, or vision are appreciated. I'd love to connect and help bring your ideas to life.
      </p>
      <div className="bottom-info">
        <p>PHONE +351 916 073 512</p>
        <div className="social-links">
          <a href="https://github.com/jorgecarvalho90" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} />
          </a>
          <a href="https://instagram.com/jorgcarv" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}
