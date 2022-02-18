import React from 'react'
import { useTranslation } from 'react-i18next';

export const HomeSectionAbout = () => {

    const [h] = useTranslation(["Home"]);

  return (
    <section id="about" className="about">
      <div className="container">

        <div className="row content">
          <div className="col-lg-6">
            <h2>{h('Brand')}</h2>
            <h3>{h('HSectionAbout.Vision')}</h3>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <p>
            {h('HSectionAbout.Company')}
            </p>
            <ul>
              <li><i className="ri-check-double-line"></i> {h('HSectionAbout.Resilient')}</li>
              <li><i className="ri-check-double-line"></i>{h('HSectionAbout.Solutions')}</li>
              <li><i className="ri-check-double-line"></i> {h('HSectionAbout.Sustainable')}</li>
              <li><i className="ri-check-double-line"></i> {h('HSectionAbout.Value')}</li>
            </ul>
            <p className="fst-italic">
            {h('HSectionAbout.Quote')}
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
