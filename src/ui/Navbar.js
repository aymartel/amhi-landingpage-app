import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useScroll } from '../hooks/useScroll';

export const Navbar = () => {
    const [navMovile, setNavMovile] = useState(false);
    const [dropdownOpenAbout, setDropdownOpenAbout] = useState(false)
    const [dropdownOpenServices, setDropdownOpenServices] = useState(false)
    const { scrollY } = useScroll();

    return (
        <header id="header" className={scrollY > 100 ? 'header-scrolled fixed-top d-flex align-items-center' : 'fixed-top d-flex align-items-center'}>
            <div className="container d-flex align-items-center" >

                <h1 className="logo me-auto">
                   
                        <NavLink to="/">
                            AMHI
                        </NavLink>
                 
                </h1>

                <nav id="navbar" className={navMovile ? 'navbar navbar-mobile' : 'navbar'}>
                    <ul>
                        <li>
                            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => { setNavMovile(false) }}>
                                Home
                            </NavLink>
                        </li>

                        <li className="dropdown">
                            <a href="/services" onClick={(e) => { e.preventDefault(); setDropdownOpenServices(!dropdownOpenServices) }}>
                                <span>Services</span>
                                <i className="bi bi-chevron-down" onClick={() => { setDropdownOpenServices(!dropdownOpenServices) }}></i>
                            </a>
                            <ul className={dropdownOpenServices ? 'dropdown-active' : 'dropdown'}>
                                <li onClick={() => { setNavMovile(false) }}>
                                    <NavLink to="/services" className={({ isActive }) => isActive ? 'active' : ''}>
                                        Services
                                    </NavLink>
                                </li>
                                

                            </ul>
                        </li>
                        <li className="dropdown">
                            <a href="/about" onClick={(e) => { e.preventDefault();setDropdownOpenAbout(!dropdownOpenAbout) }}>
                                <span >About</span>
                                <i className="bi bi-chevron-down" onClick={() => { setDropdownOpenAbout(!dropdownOpenAbout) }}></i>
                            </a>
                            <ul className={dropdownOpenAbout ? 'dropdown-active' : 'dropdown'}>
                                <li onClick={() => { setNavMovile(false) }}>
                                    <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>
                                        About
                                    </NavLink>
                                </li>
                               

                            </ul>
                        </li>

                        <li onClick={() => { setNavMovile(false) }}>
                            <NavLink to="/contact" className={({ isActive }) => isActive ? 'active getstarted' : 'getstarted'}>
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>
                    <i className={navMovile ? 'bi mobile-nav-toggle bi-x' : 'bi mobile-nav-toggle bi-list'} onClick={() => { setNavMovile(!navMovile) }}></i>
                </nav>
            </div>

        </header>
    )
}



