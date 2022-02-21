import React from 'react'
import vision001 from "../../assets/vision001.png";
import vision002 from "../../assets/vision002.png";
import vision003 from "../../assets/vision003.png";
import vision004 from "../../assets/vision004.png";
import { useTranslation } from 'react-i18next';

export const Vision = () => {
  const [a] = useTranslation(["About"]);
  const [h] = useTranslation(["Home"]);

  return (
    <section >
    <div  className="carousel-item active" >
      <br/>
        
        <ul className="timeline">
            <li>
                <div className="timeline-image"><img src={vision001} className="rounded-circle img-fluid" alt="image-vision" /></div>
                <div className="timeline-panel">
                    <div className="timeline-heading">
                      <br/>
                        <h4>{a('Vision.Vision')}</h4>
                    </div>
                    <div className="timeline-body"><p className="text-muted">{a('Vision.VisionDescription')}</p></div>
                </div>
            </li>
            <li className="timeline-inverted">
                <div className="timeline-image"><img src={vision002} className="rounded-circle img-fluid" alt="image-vision" /></div>
                <div className="timeline-panel">
                    <div className="timeline-heading">
                        <br/>
                        <h4>{h('Brand')}</h4>
                    </div>
                    <div className="timeline-body"><p className="text-muted">{a('Vision.AMHDescription')}</p></div>
                </div>
            </li>
            <li>
                <div className="timeline-image"><img src={vision003} className="rounded-circle img-fluid" alt="image-vision" /></div>
                <div className="timeline-panel">
                    <div className="timeline-heading">
                      <br/>
                        <h4>{a('Vision.WhoAre')}</h4>
                    </div>
                    <div className="timeline-body"><p className="text-muted">{a('Vision.WhoAreDescription')}</p></div>
                </div>
            </li>
            <li className="timeline-inverted">
                <div className="timeline-image"><img src={vision004} className="rounded-circle img-fluid" alt="image-vision" /></div>
                <div className="timeline-panel">
                    <div className="timeline-heading">
                      <br/>
                        <h4>{a('Vision.WhatExperience')}</h4>
                    </div>
                    <div className="timeline-body"><p className="text-muted">{a('Vision.WhatExperienceDescription')}</p></div>
                </div>
            </li>
            <li>
                <div className="timeline-image"><img src={vision003} className="rounded-circle img-fluid" alt="image-vision" /></div>
                <div className="timeline-panel">
                    <div className="timeline-heading">
                      <br/>
                        <h4>{a('Vision.WhatDo')}</h4>
                    </div>
                    <div className="timeline-body"><p className="text-muted">{a('Vision.WhatDoDescription')}</p></div>
                </div>
            </li>
        </ul>
    </div>
</section>
  )
}
