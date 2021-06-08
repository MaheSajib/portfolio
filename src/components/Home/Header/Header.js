import React from 'react';
import './Header.css';
import Typed from "react-typed";
import HeaderMenu from "../HeaderMenu/HeaderMenu"
import Particles from "react-particles-js";

const Header = () => {
    return (
        <div id="home">
            <Particles
      className="particles-canvas"
      params={{
        particles: {
          number: {
            value: 20,
            density: {
              enable: true,
              value_area: 900
            }
          },
          shape: {
            type: "circle",
            stroke: {
              width: 6,
              color: "white"
            }
          }
        }
      }}></Particles>
            
            <div className="header-wraper">
            <HeaderMenu></HeaderMenu>
            <div className="main-info">
                <h1>welcome</h1>
                
                <div className="m-2">
                    <span style={{fontSize: "50px", color:"white", marginRight:"5px"}}>I'M</span>
                    <Typed
                        className="typed-text"
                        strings={["Md. Mahe Alam","A Full-Stack Developer", "A Web Developer", "A Web Designer"]}
                        typeSpeed={120}
                        backSpeed={90}
                        loop
                    ></Typed>
                </div>
                <p className="text-white">Welcome to my Portfolio. I'm a professional web developer. <br /> I love design, development very much.</p>
                <a href="#contact" className="btn-contact">Contact Me</a>
            </div>
        </div>
        </div>
    );
};

export default Header;