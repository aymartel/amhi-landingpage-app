import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
    const [navMovile, setNavMovile] = useState(false);
    const [dropdownOpenAbout, setDropdownOpenAbout] = useState(false)
    const [dropdownOpenServices, setDropdownOpenServices] = useState(false)
    return (
        <header id="header" className="fixed-top d-flex align-items-center">
            <div className="container d-flex align-items-center" >

                <h1 className="logo me-auto"><a href="index.html">Sailor</a></h1>

                <nav id="navbar"  className={navMovile ? 'navbar navbar-mobile' : 'navbar'}>
                    <ul>
                        <li><NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}onClick={()=>{setNavMovile(false)}}>Home</NavLink></li>

                        <li className="dropdown"><a href="#"><span>Services</span> <i className="bi bi-chevron-down"  onClick={()=>{setDropdownOpenServices(!dropdownOpenServices)}}></i></a>
                            <ul className={dropdownOpenServices ?  'dropdown-active': 'dropdown'}>
                                <li onClick={()=>{setNavMovile(false)}}><NavLink to="/services" className={({ isActive }) => isActive ? 'active' : ''}>Services</NavLink></li>
                                <li onClick={()=>{setNavMovile(false)}}><NavLink to="/services" className={({ isActive }) => isActive ? 'active' : ''}>Services</NavLink></li>

                            </ul>
                        </li>
                        <li className="dropdown"><a href="#"><span>About</span> <i className="bi bi-chevron-down" onClick={()=>{setDropdownOpenAbout(!dropdownOpenAbout)}}></i></a>
                            <ul className={dropdownOpenAbout ?  'dropdown-active': 'dropdown'}>
                                <li onClick={()=>{setNavMovile(false)}}><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink></li>
                                <li onClick={()=>{setNavMovile(false)}}><NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink></li>

                            </ul>
                        </li>
                       
                        <li onClick={()=>{setNavMovile(false)}}><NavLink to="/contact" className={({ isActive }) => isActive ? 'active getstarted' : 'getstarted'}>Contact Us</NavLink></li>
                    </ul>
                    <i className={navMovile ?  'bi mobile-nav-toggle bi-x': 'bi mobile-nav-toggle bi-list'} onClick={()=>{setNavMovile(!navMovile)}}></i>
                </nav>
            </div>
            
        </header>
    )
}









{/* <nav>
    <ul>
        <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'nav-active' : ''}>Home</NavLink>
        </li>
        <li>
            <NavLink to="/services" className={({ isActive }) => isActive ? 'nav-active' : ''}>Services</NavLink>
        </li>
        <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-active' : ''}>About</NavLink>
        </li>
        <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-active' : ''}>Contact Us</NavLink>
        </li>
    </ul>
</nav> */}