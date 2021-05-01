import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faProjectDiagram } from '@fortawesome/free-solid-svg-icons'
import './HeaderMenu.css';

const HeaderMenu = () => {
    return (
        <Navbar className="nav transparent"  expand="lg">
            <Navbar.Brand className="text-white" href="/"><h3><FontAwesomeIcon icon={faProjectDiagram} /></h3></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto p-3">
                    <Nav.Link className="text-white mx-2 link" href="/">HOME</Nav.Link>
                    <Nav.Link className="text-white mx-2 link" href="#link">PROJECTS</Nav.Link>
                    <Nav.Link className="text-white mx-2 link" href="#link">BLOGS</Nav.Link>
                    <Nav.Link className="text-white mx-2 link" href="#link">RESUME</Nav.Link>
                    <Nav.Link className="text-white mx-2 link" href="#link">ABOUT ME</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default HeaderMenu;