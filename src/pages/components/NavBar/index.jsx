import React from 'react'
import "./NavBar.css"

export default function NavBar() {
  return (
    <nav className="nav-menu">  
        <h1>Jorge</h1>
        <span className="nav-menu-icon">Menu</span>
        <ul className="nav-menu-desktop">
        <li>
            <a href="#about">About</a>
        </li>
        <li>
            <a href="#technologies">Technologies</a>
        </li>
        <li>
            <a href="#projects">Projects</a>
        </li>
        </ul>
    </nav>
  )
}
