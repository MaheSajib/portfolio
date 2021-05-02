import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './MyProjects.css';
import quickFix from '../../../Img/quick-fix.png';
import kiLagbe from '../../../Img/ki-lagbe.png';
import totoMoto from '../../../Img/toto-moto.png';

const MyProjects = () => {
    return (
        <div className="container">
            <h1>My Projects</h1>
            <div className="row d-flex justify-content-center mt-5 my=2">

                <Card className="mx-2 my-5" style={{ width: '18rem' }}>
                    <Card.Img variant="top" style={{ height: "200px" }} src={quickFix} />
                    <Card.Body>
                        <Card.Title>Quick-Fix</Card.Title>
                        <Card.Text>
                            This project is service related projects. where user can take there service and give review and control by admin.
                        </Card.Text>
                        <a href="https://quick-fix-client.web.app/" className="btn card-button" >More Details</a>
                    </Card.Body>
                </Card>

                <Card className="mx-3 my-5" style={{ width: '18rem' }}>
                    <Card.Img variant="top" style={{ height: "200px" }} src={kiLagbe} />
                    <Card.Body>
                        <Card.Title>Ki Lagbe?</Card.Title>
                        <Card.Text>
                            This project is ecommerce website where user can search there product add by button on order page.
                        </Card.Text>
                        <a href="https://ki-lagbe-1.web.app/" className="btn card-button">More Details</a>
                    </Card.Body>
                </Card>

                <Card className="mx-3 my-5" style={{ width: '18rem' }}>
                    <Card.Img variant="top" style={{ height: "200px" }} src={totoMoto} />
                    <Card.Body>
                        <Card.Title>TOTO-MOTO BD</Card.Title>
                        <Card.Text>
                            It's a ride sharing demo website where user can choose there rider and search there destination.
                        </Card.Text>
                        <a href="https://agitated-yonath-fec688.netlify.app/" className="btn card-button">More Details</a>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default MyProjects;