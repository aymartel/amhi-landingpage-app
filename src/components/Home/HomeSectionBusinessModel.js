import React from 'react'
import { useTranslation } from 'react-i18next';

export const HomeSectionBusinessModel = () => {
    const [h] = useTranslation(["Home"]);
  return (
    <section id="services" className="services">
      <div className="container">

        <div className="row">
          <div className="col-md-6">
            <div className="icon-box">
              <i className="bi bi-briefcase"></i>
              <h4>{h('BusinessModel.Reliable')}</h4>
              <p>{h('BusinessModel.Uninte')}</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="icon-box">
              <i className="bi bi-card-checklist"></i>
              <h4>{h('BusinessModel.Efficient')}</h4>
              <p>{h('BusinessModel.Tested')}</p>
            </div>
          </div>
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="icon-box">
              <i className="bi bi-bar-chart"></i>
              <h4>{h('BusinessModel.Productive')}</h4>
              <p>{h('BusinessModel.Simplicity')}</p>
            </div>
          </div>
          
          <div className="col-md-6 mt-4 mt-md-0">
            <div className="icon-box">
              <i className="bi bi-brightness-high"></i>
              <h4>{h('BusinessModel.Safe')}</h4>
              <p>{h('BusinessModel.Protecting')}</p>
            </div>
          </div>
          
        </div>

      </div>
    </section>
  )
}
