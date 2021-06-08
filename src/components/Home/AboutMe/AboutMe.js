import React from 'react';
import './AboutMe.css';
import me from '../../../Img/me1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import SkillsSection from './SkillsSection/SkillsSection';

const AboutMe = () => {
    return (
        <div id="about" className="container">
            <div className="row">
                <div className="col-md-6 img-section">
                    <img src={me} alt="" />
                </div>
                <div className="col-md-6 details-section">
                    <h2>About me</h2>
                    <h5>Hello! <span className="about-name">I'm Md. Mahe Alam.</span></h5>
                    <p className="about-text">I'm a Fanatical Full-Stack Web Developer and dealing during this sector since 2019. <br /> I even have a Bachelor of Science in Computer Engineering and that I have also completed another Diploma in Digital Marketing.  <br /> Throughout my service period, I even have gained adequate experience to try to SEO, Affiliated Marketing, Social Media Marketing, etc. <br /> with the simplest possible efficiency. I'm currently working as a Web Developer and that I am going to be available to create an dynamic websites. </p>
                    <div className="icons-section d-flex justify-content-center my-3">
                        <a target="_blank" href="https://www.facebook.com/rehan.rayhan"><FontAwesomeIcon className="social-icon" icon={faFacebook} /></a>
                        <a target="_blank" href="https://www.linkedin.com/in/mahe-alam-/"><FontAwesomeIcon className="social-icon" icon={faLinkedin} /></a>
                        <a target="_blank" href="https://twitter.com/MaheSajib"><FontAwesomeIcon className="social-icon" icon={faTwitter} /></a>
                        <a target="_blank" href="https://github.com/MaheSajib"><FontAwesomeIcon className="social-icon" icon={faGithub} /></a>
                    </div>
                    <div className="text-center">
                        <a href="https://drive.google.com/uc?export=download&id=19HvIMfv47G2Ugf0PgGGJDy0GqaeawKqb" className="btn download-btn" download>Download CV</a>
                    </div>
                </div>
            </div>
            <div className="row mt-5 my-skill">
                <h2>My Skills</h2>
                <div className="skills-container">
                    <SkillsSection skill={'ReactJs'} progress={'80%'} width={'80%'}></SkillsSection>
                    <SkillsSection skill={'JavaScript'} progress={'85%'} width={'85%'}></SkillsSection>
                    <SkillsSection skill={'NodeJs'} progress={'80%'} width={'80%'}></SkillsSection>
                    <SkillsSection skill={'ExpressJs'} progress={'80%'} width={'80%'}></SkillsSection>
                    <SkillsSection skill={'Firebase'} progress={'90%'} width={'90%'}></SkillsSection>
                    <SkillsSection skill={'MongoDB'} progress={'80%'} width={'80%'}></SkillsSection>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;