import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const form = useRef();
    const User_id = "user_vIx3BzFhHj1JlnIkSePZE";
    const Service_id = "service_g14xd9e";
    const Template_id = "template_s5wq1tn";
    
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm(Service_id, Template_id, form.current, User_id)
        .then((result) => {
            console.log(result.text);
            Array.from(document.querySelectorAll("input, textarea")).forEach(
                input => (input.value = "")
              );
              
        }, (error) => {
            
            console.log(error.text);
        });
        
    };

    return (
        
            <section id="contact" className="contact">
                <div className="container">

                    <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4908.761728587229!2d37.53830996067027!3d55.65982687111914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54de19ace4f15%3A0x1f8e105bfe7f17b8!2sCitilink!5e0!3m2!1ses-419!2sru!4v1645483302092!5m2!1ses-419!2sru" ></iframe>
                    </div>

                    <div className="row mt-5">

                        <div className="col-lg-4">
                            <div className="info">
                                <div className="address">
                                    <i className="bi bi-geo-alt"></i>
                                    <h4>Location:</h4>
                                    <p>A108 Adam Street, New York, NY 535022</p>
                                </div>

                                <div className="email">
                                    <i className="bi bi-envelope"></i>
                                    <h4>Email:</h4>
                                    <p>info@example.com</p>
                                </div>

                                <div className="phone">
                                    <i className="bi bi-phone"></i>
                                    <h4>Call:</h4>
                                    <p>+1 5589 55488 55s</p>
                                </div>

                            </div>

                        </div>

                        <div className="col-lg-8 mt-5 mt-lg-0">

                            <form ref={form} onSubmit={sendEmail} className="php-email-form">
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input name="user_name"  className="form-control" id="name" placeholder="Your Name" required />
                                    </div>
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <input type="email" name="user_email" className="form-control" id="email" placeholder="Your Email" required />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                                    </div>
                                    <div className="col-md-6 form-group mt-3 mt-md-0">
                                        <input type="tel" className="form-control" name="phone" id="phone" placeholder="Phone" required />
                                    </div>
                                </div>
                                
                                <div className="form-group mt-3">
                                    <textarea className="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                                </div>
                                <div className="my-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message"></div>
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div className="text-center"><button type="submit" value="Send">Send Message</button></div>
                            </form>

                        </div>

                    </div>

                </div>
            </section>
        
    )
}



