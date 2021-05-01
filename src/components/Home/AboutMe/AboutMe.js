import React from 'react';
import './AboutMe.css';
import me from '../../../Img/me1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const AboutMe = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 img-section">
                    <img src={me} alt="" />
                </div>
                <div className="col-md-6 details-section">
                    <h2>About me</h2>
                    <h5>Hello! <span className="about-name">I'm Md. Mahe Alam.</span></h5>
                    <p className="about-text">I'm a Fanatical Full-Stack Web Developer and dealing during this sector since 2019. <br /> I even have a Bachelor of Science in Computer Engineering and that I have also completed another Diploma in Digital Marketing.  <br /> Throughout my service period, I even have gained adequate experience to try to SEO, Affiliated Marketing, Social Media Marketing, etc. <br /> with the simplest possible efficiency. I'm currently working as a Web Developer and that I am going to be available to create an dynamic websites. </p>
                    <div className="icons-section d-flex justify-content-center my-3">
                        <a href="https://www.facebook.com/rehan.rayhan"><FontAwesomeIcon className="social-icon" icon={faFacebook} /></a>
                        <a href="https://www.linkedin.com/in/mahe-alam-/"><FontAwesomeIcon className="social-icon" icon={faLinkedin} /></a>
                        <a href="https://twitter.com/MaheSajib"><FontAwesomeIcon className="social-icon" icon={faTwitter} /></a>
                        <a href="https://github.com/MaheSajib"><FontAwesomeIcon className="social-icon" icon={faGithub} /></a>
                    </div>
                    <div className="text-center">
                        <button className="btn">Download CV</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;