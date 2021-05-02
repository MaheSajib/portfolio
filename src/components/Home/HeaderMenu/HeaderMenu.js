import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons'
import './HeaderMenu.css';

const HeaderMenu = () => {
    return (
        <Navbar className="nav transparent"  expand="lg">
            <Navbar.Brand className="text-white" href="/"><h3><FontAwesomeIcon icon={faProjectDiagram} /> MAHE ALAM</h3></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto p-3">
                    <Nav.Link className="text-white mx-2 link" href="#home">HOME</Nav.Link>
                    <Nav.Link className="text-white mx-2 link" href="#projects">PROJECTS</Nav.Link>
                    <Nav.Link className="text-white mx-2 link" href="#blogs">BLOGS</Nav.Link>
                    <Nav.Link className="text-white mx-2 link" href="#about">ABOUT ME</Nav.Link>
                    <Nav.Link className="text-white mx-2 link" href="#contact">CONTACT</Nav.Link>
                    <a href="https://drive.google.com/file/d/19HvIMfv47G2Ugf0PgGGJDy0GqaeawKqb/view?usp=sharing" className="btn nav-button mx-2">RESUME</a>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default HeaderMenu;