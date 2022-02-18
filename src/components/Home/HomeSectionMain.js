import React from 'react'
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import backgroundHome from "../../assets/backgroundHome.jpg";

export const HomeSectionMain = () => {
    const [h] = useTranslation(["Home"]);
  return (
    <section id="hero" >
     
          <div  className="carousel-item active"style={{ backgroundImage: `url(${backgroundHome})` }} >
            <div  className="carousel-container">
              <div  className="container">
              <img src={logo} className="img-home-logo animate__animated animate__fadeInDown " alt="logo" />

                <h2 className="animate__animated animate__fadeInDown">{h('Brand')}</h2>
                <p className="animate__animated animate__fadeInUp">{h('HSectionMain.Description')}</p>
                <NavLink to="/about/vision" className="btn-get-started animate__animated animate__fadeInUp scrollto">{h('HSectionMain.ReadMore')}</NavLink>
              </div>
            </div>
          </div>
          
    </section>
  )
}
