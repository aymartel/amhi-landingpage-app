import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useScroll } from '../hooks/useScroll';

import { useTranslation } from 'react-i18next';



export const Navbar = () => {
    const [navMovile, setNavMovile] = useState(false);
    const [dropdownOpenAbout, setDropdownOpenAbout] = useState(false)
    const [dropdownOpenServices, setDropdownOpenServices] = useState(false)
    const { scrollY } = useScroll();

    const [n, i18n] = useTranslation(["Navbar"]);
    const [s] = useTranslation(["Services"]);
    const [a] = useTranslation(["About"]);

    function changeToEnglish() {
        i18n.changeLanguage('en');
    }

    function changeToSpanish() {
        i18n.changeLanguage('es');
    }

    function changeToRussian() {
        i18n.changeLanguage('ru');
    }

    return (
        <header id="header" className={scrollY > 100 ? 'header-scrolled fixed-top d-flex align-items-center' : 'fixed-top d-flex align-items-center'}>
            <div className="container d-flex align-items-center" >

                <h1 className="logo me-auto">

                    <NavLink to="/">
                        {n('Brand')}
                    </NavLink>

                </h1>

                <nav id="navbar" className={navMovile ? 'navbar navbar-mobile' : 'navbar'}>
                    <ul>

                        <li className="dropdown">
                            <a href="/services" onClick={(e) => { e.preventDefault(); setDropdownOpenServices(!dropdownOpenServices) }}>
                                <span>{s('Services')}</span>
                                <i className="bi bi-chevron-down" onClick={() => { setDropdownOpenServices(!dropdownOpenServices) }}></i>
                            </a>
                            <ul className={dropdownOpenServices ? 'dropdown-active' : 'dropdown'}>
                                <li onClick={() => { setNavMovile(false) }}>
                                    <NavLink to="/services/advance-broker" className={({ isActive }) => isActive ? 'active' : ''}>
                                    {s('AB.AdvancedBroker')}
                                    </NavLink>
                                </li>
                                <li onClick={() => { setNavMovile(false) }}>
                                    <NavLink to="/services/financial-advisor" className={({ isActive }) => isActive ? 'active' : ''}>
                                        {s('FA.FinancialAdvisor')}
                                    </NavLink>
                                </li>


                            </ul>
                        </li>
                        <li className="dropdown">
                            <a href="/about" onClick={(e) => { e.preventDefault(); setDropdownOpenAbout(!dropdownOpenAbout) }}>
                                <span >{n('Links.About')}</span>
                                <i className="bi bi-chevron-down" onClick={() => { setDropdownOpenAbout(!dropdownOpenAbout) }}></i>
                            </a>
                            <ul className={dropdownOpenAbout ? 'dropdown-active' : 'dropdown'}>
                                
                                <li onClick={() => { setNavMovile(false) }}>
                                    <NavLink to="/about/company" className={({ isActive }) => isActive ? 'active' : ''}>
                                        {n('Links.Company')}
                                    </NavLink>
                                </li>
                                <li onClick={() => { setNavMovile(false) }}>
                                    <NavLink to="/about/vision" className={({ isActive }) => isActive ? 'active' : ''}>
                                        {a('Vision.Vision')}
                                    </NavLink>
                                </li>

                            </ul>
                        </li>

                        <li onClick={() => { setNavMovile(false) }}>
                            <NavLink to="/contact" className={({ isActive }) => isActive ? 'active getstarted' : 'getstarted'}>
                            {n('Links.ContactUs')}
                            </NavLink>
                        </li>
                        <a className={i18n.language === "ru" ? 'active' : ''} onClick={changeToRussian}>

                            RU
                        </a>
                        <a className={i18n.language === "en" ? 'active' : ''} onClick={changeToEnglish}>
                            EN

                        </a>
                        <a className={i18n.language === "es" ? 'active' : ''} onClick={changeToSpanish}>
                            ES
                        </a>
                    </ul>
                    <i className={navMovile ? 'bi mobile-nav-toggle bi-x' : 'bi mobile-nav-toggle bi-list'} onClick={() => { setNavMovile(!navMovile) }}></i>
                </nav>
            </div>

        </header>
    )
}



