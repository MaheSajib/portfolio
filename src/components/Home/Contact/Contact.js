import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile, faEnvelope, faMarker } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com';

const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_m4pnaks', 'template_mkw0j55', e.target, 'user_CxtEFx1UtS9ZVwo2cw4Xw')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });


    }

    return (
        <div id="contact" className="container">
            <h1>Contact Me</h1>
            <h5>For More Information Feel Free to Contact with me.</h5>
            <div className="row">
                <div className="col-md-6 mt-3">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.5962415498857!2d90.42152091434934!3d23.79738799289797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7ba91dfe545%3A0x91f5c3830cc60110!2sNatun%20Bazaar%20Bus%20Stand!5e0!3m2!1sen!2sbd!4v1619947582153!5m2!1sen!2sbd" width="100%" height="450" style={{ border: "0" }} allowfullscreen="" loading="lazy"></iframe>
                </div>
                <div className="col-md-6 mt-3">
                    <p><FontAwesomeIcon icon={faMobile} /> Mobile: +8801682491253</p>
                    <p><FontAwesomeIcon icon={faEnvelope} /> Email: mahe.sajib@gmail.com</p>
                    <form className="contact-form" onSubmit={sendEmail}>
                        
                        <input className="form-control" placeholder="Enter Your Name" type="text" name="from_name" />
                        <br/>
                        <input className="form-control" placeholder="Enter Your Email" type="email" name="email" />
                        <br/>
                        <input className="form-control" placeholder="Enter Your Subject" type="text" name="subject" />
                        <br/>
                        <textarea className="form-control" placeholder="Enter Your Message" name="message" />
                        <br/>
                        <input className="btn submit-massage form-control" type="submit" value="Submit Massage" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;