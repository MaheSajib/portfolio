import React from 'react';
import { Card } from 'react-bootstrap';
import './Blog.css';

const Blog = () => {
    return (
        <div id="blogs" className="container blog-container text-center">
            <h1 >Blogs </h1>
            <div className="row d-flex justify-content-center mt-5 my=2">

                <Card className="blog-card mx-2 my-5" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>How to Learn JavaScript??</Card.Title>
                        <Card.Text>
                            With two decades of improvement, JavaScript has become one of the most popular programming languages of all <a target="_blank" href="https://digitalmarketingtips12.blogspot.com/2021/05/how-to-learn-javascript.html">Learn More</a>
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="blog-card mx-3 my-5" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>How to learn node.js?</Card.Title>
                        <Card.Text>
                            Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project! <a target="_blank" href="https://digitalmarketingtips12.blogspot.com/2021/05/how-to-learn-nodejs.html">Learn More</a>
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="blog-card mx-3 my-5" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>How to learn React.js?</Card.Title>
                        <Card.Text>
                            How to learn React is high on the agenda for plenty of JavaScript developers for this year. The recent State of JS survey has shown. <a target="_blank" href="https://digitalmarketingtips12.blogspot.com/2021/05/how-to-learn-reactjs.html">Learn More</a>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

        </div>
    );
};

export default Blog;