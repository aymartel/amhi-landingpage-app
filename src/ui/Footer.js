import React from 'react'
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

export const Footer = () => {
    const [n] = useTranslation(["Navbar"]);
    const [f] = useTranslation(["Footer"]);
    const [s] = useTranslation(["Services"]);
    const [a] = useTranslation(["About"]);

    return (
        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-3 col-md-6">
                            <div className="footer-info">
                                <h3>{n('Brand')}</h3>
                                <p>
                                    {f('Address')}
                                    <br />
                                    <strong>{f('Phone')}:</strong> +1 5589 55488 55<br />
                                    <strong>{f('Email')}:</strong> info@example.com<br />
                                </p>
                                <div className="social-links mt-3">
                                    <a href="https://www.google.com/" target="_blank" className="twitter"><i className="bx bxl-twitter"></i></a>
                                    <a href="https://www.google.com/" target="_blank" className="facebook"><i className="bx bxl-facebook"></i></a>
                                    <a href="https://www.google.com/" target="_blank" className="instagram"><i className="bx bxl-instagram"></i></a>
                                    <a href="https://www.google.com/" target="_blank" className="google-plus"><i className="bx bxl-skype"></i></a>
                                    <a href="https://www.google.com/" target="_blank" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>{s('Services')}</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i> <NavLink to="/services/advance-broker">{s('AB.AdvancedBroker')}</NavLink></li>
                                <li><i className="bx bx-chevron-right"></i> <NavLink to="/services/financial-advisor">{s('FA.FinancialAdvisor')}</NavLink></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-links">
                            <h4>{n('Links.About')}</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"></i> <NavLink to="/about/vision">{a('Vision.Vision')}</NavLink></li>
                                <li><i className="bx bx-chevron-right"></i> <NavLink to="/about/company">{n('Links.Company')}</NavLink></li>
                            </ul>
                        </div>

                        <div className="col-lg-3 col-md-6 footer-newsletter">
                            <NavLink to="/contact"><h4>{n('Links.ContactUs')}</h4></NavLink>

                        </div>

                    </div>
                </div>
            </div>

            <div className="container">
                <div className="copyright">
                    &copy; 2022 {n('Brand')} - <strong><span>Andy MC</span></strong>. {f('Copyright')}
                </div>


            </div>
        </footer>
    )
}
