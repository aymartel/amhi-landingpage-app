import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
            <ul>
                <li>
                    <NavLink to="/" className={({isActive})=> isActive? 'nav-active':''}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/services" className={({isActive})=> isActive? 'nav-active':''}>Services</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({isActive})=> isActive? 'nav-active':''}>About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={({isActive})=> isActive? 'nav-active':''}>Contact Us</NavLink>
                </li>
            </ul>
        </nav>
  )
}
