import React from 'react';
import { useTranslation } from 'react-i18next';


export const Company = () => {
    const [f] = useTranslation(["Footer"]);
    const [a] = useTranslation(["About"]);
    const [h] = useTranslation(["Home"]);

    return (
        <section id="about" className="about">
            <br />
            <br />
            <div className="container">

                <div className="row content">
                    <div className="col-lg-6">
                        <h2>{h('Brand')}</h2>
                        <h3> <strong>{a('Company.Address')}: </strong>{f('Address')}<br /></h3>
                        <h3> <strong>{f('Phone')}:</strong> +1 5589 55488 55<br /></h3>
                        <h3><strong>{f('Email')}:</strong> info@example.com<br /></h3>
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0">
                        <div className="container">
                            <div id="services" className="services">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="icon-box">
                                            <i className="bi bi-briefcase"></i>
                                            <h4>{a('Company.INN')}</h4>
                                            <p>7751173401</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mt-4 mt-md-0">
                                        <div className="icon-box">
                                            <i className="bi bi-card-checklist"></i>
                                            <h4>{a('Company.KPP')}</h4>
                                            <p>775101001</p>
                                        </div>
                                    </div>
                                    

                                    <div className="col-md-6 mt-4 mt-md-0">
                                        <div className="icon-box">
                                            <i className="bi bi-brightness-high"></i>
                                            <h4>{a('Company.OGRN')}</h4>
                                            <p>1197746701503</p>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
