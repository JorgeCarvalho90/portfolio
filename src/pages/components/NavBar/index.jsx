import React from 'react'
import "./NavBar.css"
import { Link, useNavigate } from 'react-router'

export default function NavBar() {
  const navigate = useNavigate()
  return (
    <nav className="nav-menu">  
        <a onClick={() =>{
                navigate("/")
              }}>Home</a>
        <span className="nav-menu-icon">Menu</span>
        <ul className="nav-menu-desktop">
          <li>
              <a onClick={() =>{
                navigate("/about")
              }}>About</a>
          </li>
          <li>
              <a onClick={() =>{
                navigate("/works")
              }}>Works</a>
          </li>
          <li>
              <a onClick={() =>{
                navigate("/contact")
              }}>Contact</a>
          </li>
        </ul>
    </nav>
  )
}
