import React from 'react'
import { useState } from 'react'
import "./NavBar.css"
import {useNavigate } from 'react-router'

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false)

  function handleNavigation(path) {
    navigate(path)
    setShowMenu(false)
  }

  const navigate = useNavigate()
  return (
    <nav className="nav-menu">  
        <a onClick={() =>{
                handleNavigation("/")
              }}>HOME</a>
         <span 
          className="nav-menu-icon" 
          onClick={() => setShowMenu(!showMenu)}
        >
          ☰ MENU
        </span>
        <ul className={`nav-menu-desktop ${showMenu ? 'open' : ''}`}>
          <li><a onClick={() => handleNavigation("/about")}>ABOUT</a></li>
          <li><a onClick={() => handleNavigation("/works")}>WORKS</a></li>
          <li><a onClick={() => handleNavigation("/contact")}>CONTACT</a></li>
        </ul>
    </nav>
  )
}
