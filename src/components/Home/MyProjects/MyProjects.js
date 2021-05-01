import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './MyProjects.css';
import project from '../../../Img/project.png';

const MyProjects = () => {
    return (
        <div>
            <h1>My Projects</h1>
            <div className="d-flex justify-content-center mt-5">
                <Card className="mx-5" style={{ width: '18rem' }}>
                    <Card.Img variant="top" style={{height:"200px"}} src={project} />
                    <Card.Body>
                        <Card.Title>Quick-Fix</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

                <Card className="mx-5" style={{ width: '18rem' }}>
                    <Card.Img variant="top" style={{height:"200px"}} src={project} />
                    <Card.Body>
                        <Card.Title>Quick-Fix</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>

                <Card className="mx-5" style={{ width: '18rem' }}>
                    <Card.Img variant="top" style={{height:"200px"}} src={project} />
                    <Card.Body>
                        <Card.Title>Quick-Fix</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default MyProjects;