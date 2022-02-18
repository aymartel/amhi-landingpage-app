import React from 'react'
import { useTranslation } from 'react-i18next';

export const HomeSectionServices = () => {
    const [s] = useTranslation(["Services"]);

    return (
        <section id="features" className="features">
            <div className="container">

                <div className="section-title">
                    <h2>{s('Services')}</h2>
                    <p>{s('CheckServices')}</p>
                </div>
                
                <div className="row">
                    <div className="col-lg-3">
                        <ul className="nav nav-tabs flex-column">
                            <li className="nav-item">
                                <a className="nav-link active show" data-bs-toggle="tab" href="#tab-1">{s('FA.FinancialAdvisor')}</a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link" data-bs-toggle="tab" href="#tab-3">{s('AB.AdvancedBroker')}</a>
                            </li>
                            
                        </ul>
                    </div>
                    <div className="col-lg-9 mt-4 mt-lg-0">
                        <div className="tab-content">
                            <div className="tab-pane active show" id="tab-1">
                                <div className="row">
                                    <div className="col-lg-8 details order-2 order-lg-1">
                                        <h3>{s('FA.FinancialAdvisor')}</h3>
                                        <p className="fst-italic">{s('FA.FASubtitle')}</p>
                                        <p>{s('FA.FADescription')}</p>
                                    </div>
                                    <div className="col-lg-4 text-center order-1 order-lg-2">
                                        <img src="assets/img/features-1.png" alt="" className="img-fluid" />
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane" id="tab-3">
                                <div className="row">
                                    <div className="col-lg-8 details order-2 order-lg-1">
                                        <h3>{s('AB.AdvancedBroker')}</h3>
                                        <p className="fst-italic">{s('AB.ABSubtitle')}</p>
                                        <p>{s('AB.ABDescription')}</p>
                                    </div>
                                    <div className="col-lg-4 text-center order-1 order-lg-2">
                                        <img src="assets/img/features-3.png" alt="" className="img-fluid" />
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
