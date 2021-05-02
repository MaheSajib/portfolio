import React from 'react';
import { Card } from 'react-bootstrap';
import './Blog.css';
import blog from '../../../Img/toto-moto.png';

const Blog = () => {
    return (
        <div className="container blog-container text-center">
            <h1>Blog </h1>
            <div className="row d-flex justify-content-center mt-5 my=2">

                <Card className="mx-2 my-5" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>How to Learn JavaScript??</Card.Title>
                        <Card.Text>
                        With two decades of improvement, JavaScript has become one of the most popular programming languages of all time. <a href="https://digitalmarketingtips12.blogspot.com/2021/05/how-to-learn-javascript.html">Learn More</a>
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="mx-3 my-5" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>How to learn node.js?</Card.Title>
                        <Card.Text>
                        Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project! <a href="https://digitalmarketingtips12.blogspot.com/2021/05/how-to-learn-nodejs.html">Learn More</a>
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="mx-3 my-5" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>How to learn React.js?</Card.Title>
                        <Card.Text>
                        How to learn React is high on the agenda for plenty of JavaScript developers for this year. The recent State of JS survey has shown. <a href="https://digitalmarketingtips12.blogspot.com/2021/05/how-to-learn-reactjs.html">Learn More</a>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

        </div>
    );
};

export default Blog;